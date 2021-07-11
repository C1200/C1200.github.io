---
layout: docs
title: Logger
parent: C1200's SDK
type: Class
---

## Require:

```js
const Logger = require("c1200s-sdk/logger");
// OR
const Logger = require("c1200s-sdk").Logger;
```

## Initiate:

```js
var options = {
    showTime: Boolean, // Default: true
};

const log = new Logger(options);
```

## Use:

```js
// Info
log.info("Hello, World!");
// Warn
log.warn("Hello, World!");
// Error
log.error("Hello, World!");
```