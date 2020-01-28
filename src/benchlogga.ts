import * as clc from 'cli-color';
import * as prettyHrtime from 'pretty-hrtime';

const yellow = clc.xterm(3);

export class Benchlogga {
  private lastTimestamp?: [number, number];

  constructor(protected context?: string, private readonly isTimeDiffEnabled = true) {}

  setContext(context: string) {
    this.context = context;
  }

  log(message: any) {
    this.printMessage(message, clc.green);
  }

  error(error: any, trace = '') {
    let message;
    if (error instanceof Error) {
      message = error.message;
      trace = trace || error.stack;
    } else {
      message = error;
    }

    this.printMessage(message, clc.red);
    this.printStackTrace(trace);
  }

  warn(message: any) {
    this.printMessage(message, clc.yellow);
  }

  debug(message: any) {
    this.printMessage(message, clc.magentaBright);
  }

  verbose(message: any) {
    this.printMessage(message, clc.cyanBright);
  }

  private printMessage(message: any, color: (message: string) => string) {
    const output =
      typeof message === 'object' ? `${color('Object:')}\n${JSON.stringify(message, null, 2)}\n` : color(message);

    const localeStringOptions = {
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      day: '2-digit',
      month: '2-digit'
    };
    const timestamp = new Date(Date.now()).toLocaleString(undefined, localeStringOptions);

    const pidMessage = color(`[pid] ${process.pid} - `);
    const contextMessage = this.context ? yellow(`[${this.context}] `) : '';
    const timestampDiff = this.updateAndGetTimestampDiff();

    process.stdout.write(`${pidMessage}${timestamp}  ${contextMessage}${output}${timestampDiff}\n`);
  }

  private updateAndGetTimestampDiff(): string {
    const includeTimestamp = this.lastTimestamp && this.isTimeDiffEnabled;
    const result = includeTimestamp ? prettyHrtime(process.hrtime(this.lastTimestamp), { precise: true }) : '';
    this.lastTimestamp = process.hrtime();
    return yellow(result ? ` +${result}` : '');
  }

  private printStackTrace(trace: string) {
    if (!trace) {
      return;
    }
    process.stdout.write(`${trace}\n`);
  }
}
