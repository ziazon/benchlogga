var moment = require('moment-timezone');

/**
 *
 *		Log
 *	generic enough stdout logging facility
 *
 */

module.exports = function log() {
	var escape = "\033";

	var colors = {
		"yellow": escape + "[33m",
		"green": escape + "[32m",
		"red": escape + "[31m",
		"magenta": escape + "[35m",
		"cyan": escape + "[36m",
		"reset": escape + "[0m"
	};

	var typesMap = {
		"info": colors.yellow,
		"success": colors.green,
		"error": colors.red,
		"debug": colors.magenta,
		"cyan": colors.cyan,
	};

	var timestamp = '[' + moment().format('YYYY-MM-DD HH:mm:ss') + '] ';

	if (!arguments[0]) arguments[0] = "info";

	if (arguments[1] instanceof Error) {
		arguments[1] = typesMap[arguments[0]] + timestamp + arguments[1].message + colors.reset;
	} else if (typeof arguments[1] === 'object') {
		arguments[1] = typesMap[arguments[0]] + timestamp + JSON.stringify(arguments[1]) + colors.reset;
	} else if (typeof arguments[1] === 'string') {
		arguments[1] = typesMap[arguments[0]] + timestamp + arguments[1] + colors.reset;
	}
	var args = Array.prototype.slice.call(arguments);
	args.splice(0, 1);

	console.log.apply(this, args);

}