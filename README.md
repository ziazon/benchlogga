# Benchlogga

A nodejs logging and benchmarking package.

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=jubairsaidi/benchlogga)](https://dependabot.com)

- [Benchlogga](#benchlogga)
  - [Installation](#installation)
  - [Usage](#usage)
    - [TypeScript](#typescript)
    - [Javascript](#javascript)
    - [Usage](#usage-1)
    - [Roadmap](#roadmap)

## Installation

```sh
npm i benchlogga
yarn add benchlogga
```

## Usage

### TypeScript

```typescript
import { Benchlogga } from 'benchlogga';

const logger1 = new Benchlogga('SomeContext');
const logger2 = new Benchlogga('SomeOtherContext');
```

### Javascript

```javascript
var Benchlogga = require('benchlogga');

var logger = new Benchlogga('SomeContext');
var logger2 = new Benchlogga('SomeOtherContext');
```

### Usage

Basic usage looks like this
```typescript
logger.log('Hello from one of my modules');
logger.log('Some other event from the first module');
logger2.log('Hello from a differnet module');
setTimeout(() => logger.log('something that happened later'), 200);
```

The above would output something like this

```sh
[pid] 61380 - 01/28/2020, 12:28:45 AM  [SomeContext] Hello from one of my modules
[pid] 61380 - 01/28/2020, 12:28:45 AM  [SomeContext] Some other event from the first module +252.486 μs
[pid] 61380 - 01/28/2020, 12:28:45 AM  [SomeOtherContext] Hello from a different module
[pid] 61380 - 01/28/2020, 12:28:46 AM  [SomeContext] something that happened later +204.113158 ms
```

Benchlogga comes with 5 different message types

```typescript
logger.log('string message')
logger.warn('string message')
logger.debug('string message')
logger.verbose('string message')
logger.error('string message', 'stack trace')
// or
logger.error(new Error('string message'))
```

The primary difference between them is the colors they display.  For example, the above results in something that looks like this
![image](https://user-images.githubusercontent.com/1675902/73324617-8a4ae080-4219-11ea-8df5-c5b9dcddf1ed.png)

### Roadmap

Currently it's mainly in the form of performance.  can't have decent benchmarking if the logger is taking up too much time internally.
