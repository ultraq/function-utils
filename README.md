
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

The functions in this module also make use of `Array.from`, which may require a
polyfill depending on your browser support targets.


API
---

### memoize(func)

A higher-order function to apply [memoization](https://en.wikipedia.org/wiki/Memoization).
Returns a memozied version of the given function.

Shortcomings:
 - Does not intercept recursive calls within the given function to the memoized
   version.  Existing consumers can achieve this if the function, when defined,
   is the memoized version,
   eg: `const myFunction => memoize(() => myFunction())`
 - Not sure what the behaviour is if memoizing a function that receives no
   parameters.

 - **func**: the function to memoize
