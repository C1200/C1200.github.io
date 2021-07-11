---
layout: docs
title: EventEmitter
parent: C1200's SDK
type: Class
---

## Require:

```js
const EventEmitter = require("c1200s-sdk/eventemitter");
// OR
const EventEmitter = require("c1200s-sdk").EventEmitter;
```

## Initiate:

```js
class MyClass extends EventEmitter {
    constructor() {
        super();
    }
}
```

## Trigger an event:

```js
this.emit();
```

## Register a listener:

```js
this.on();
// OR
this.once();
// OR
this.addListener(); // Just an alias of on()
```
