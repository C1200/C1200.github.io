---
layout: docs
title: Formatter
parent: C1200's SDK
type: Function
---

## Require:

```js
const format = require("c1200s-sdk/formatter");
// OR
const format = require("c1200s-sdk").format;
```

## Use:

```js
"Hello, {}!".format("World"); // => Hello, World!
// OR
format("Hello, {}!", "World"); // => Hello, World!
```