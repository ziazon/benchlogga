# Benchlogga

A nodejs logging and benchmarking package.

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

var logger1 = new Benchlogga('SomeContext');
var logger2 = new Benchlogga('SomeOtherContext');
```

### Usage

```typescript
logger1.log('Hello from one of my modules');
logger1.log('Some other event from the first module');
logger2.log('Hello from a differnet module');
setTimeout(() => logger1.log('something that happened later'), 200);

// output should be
[pid] 61380 - 01/28/2020, 12:28:45 AM  [SomeContext] Hello from one of my modules
[pid] 61380 - 01/28/2020, 12:28:45 AM  [SomeContext] Some other event from the first module +252.486 μs
[pid] 61380 - 01/28/2020, 12:28:45 AM  [SomeOtherContext] Hello from a differnet module
[pid] 61380 - 01/28/2020, 12:28:46 AM  [SomeContext] something that happened later +204.113158 ms
```

### API

Stay tunes...
