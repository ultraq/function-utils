
function-utils
==============

[![Build Status](https://github.com/ultraq/function-utils/actions/workflows/build.yml/badge.svg)](https://github.com/ultraq/function-utils/actions)
[![codecov](https://codecov.io/gh/ultraq/function-utils/graph/badge.svg?token=6055zFpxol)](https://codecov.io/gh/ultraq/function-utils)
[![npm](https://img.shields.io/npm/v/@ultraq/function-utils.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/function-utils)
[![Bundlephobia minified size](https://img.shields.io/bundlephobia/min/@ultraq/function-utils)](https://bundlephobia.com/result?p=@ultraq/function-utils)

A collection of utilities for JavaScript functions.


Installation
------------

```
npm install @ultraq/function-utils
```


API
---

### memoize(func)

A higher-order function to apply [memoization](https://en.wikipedia.org/wiki/Memoization),
returning a memozied version of the wrapped function.

If memoizing a recursive function, then memoize and define the function at the
same time so you can make a call to the memoized function, eg:

```javascript
const myFunction = memoize(() => myFunction());
```

 - **func**: the function to memoize
