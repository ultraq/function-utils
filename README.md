
function-utils
==============

[![Build Status](https://travis-ci.org/ultraq/function-utils.svg?branch=master)](https://travis-ci.org/ultraq/function-utils)
[![Coverage Status](https://coveralls.io/repos/github/ultraq/function-utils/badge.svg?branch=master)](https://coveralls.io/github/ultraq/function-utils?branch=master)
[![npm](https://img.shields.io/npm/v/@ultraq/function-utils.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/function-utils)
[![License](https://img.shields.io/github/license/ultraq/function-utils.svg?maxAge=2592000)](https://github.com/ultraq/function-utils/blob/master/LICENSE.txt)

A collection of utilities for JavaScript functions.


Installation
------------

Via npm:

```
npm install @ultraq/function-utils --save
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
