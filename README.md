# HTTP Status Text

`HTTP Status Text` is a simple JavaScript module that returns the corresponding status text for a given HTTP status code. It can be easily integrated into Node.js projects as well as front-end JavaScript applications.

## Features

- Returns the corresponding status text for any HTTP status code.
- Compatible with both Node.js and browser environments.
- Lightweight and fast implementation for efficient usage.

## Installation

```bash
npm install http-status-text
```

## Usage

```javascript
const { httpStatusText } = require("http-status-text");

console.log(httpStatusText(200)); // "OK"
console.log(httpStatusText(404)); // "Not Found"
console.log(httpStatusText(500)); // "Internal Server Error"
```

