declare module "benchlogga" {
  import benchlogga = require('benchlogga');

  export function log (type: string, ...args: any[]): string;

  export interface bench {
    start(label: string): void;
    end(label: string): void;
  }
}
