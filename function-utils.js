/**
 * A higher-order function to apply [memoization](https://en.wikipedia.org/wiki/Memoization).
 * 
 * If memoizing a recursive function, then memoize and define the function at
 * the same time so you can make a call to the memoized function, eg:
 * 
 * ```javascript
 * const myFunction = memoize(() => myFunction());
 * ```
 * 
 * @param {Function} func
 * @return {Function} 
 */
export function memoize(func) {
	const cache = {};
	return function(...args) {
		let key = args.length ? args
			.map(arg =>
				arg === null ? 'null' :
				arg === undefined ? 'undefined' :
				typeof arg === 'function' ? arg.toString() :
				arg instanceof Date ? arg.toISOString() :
				JSON.stringify(arg)
			)
			.join('|') :
			'_(no-args)_';
		if (Object.prototype.hasOwnProperty.call(cache, key)) {
			return cache[key];
		}
		let result = func(...args);
		cache[key] = result;
		return result;
	};
}
