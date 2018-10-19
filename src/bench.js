/**
 *	Bench
 *
 *	small becnhmarking utility levergaing prettyHrtime for output
 *	handles multiple timers
 *
 */

var prettyHrtime = require('pretty-hrtime');
var log = require('./log');
var timers = {};

module.exports = {
	start: function (label) {
		var o = new Object();
		o.start = process.hrtime();
		o.end = undefined;
		timers[label] = o;
	},

	end: function (label) {
		timers[label].end = process.hrtime(timers[label].start);
		log('debug', "-- BENCHMARK " + label + " ---> " + prettyHrtime(timers[label].end, {
			verbose: true
		}));
		return delete timers[label];
	}
}