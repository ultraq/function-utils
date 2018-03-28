/**
 * A higher-order function to apply [memoization](https://en.wikipedia.org/wiki/Memoization).
 * 
 * Shortcomings:
 *  - Does not intercept recursive calls within the given function to the
 *    memoized version.  Existing consumers can achieve this if the function,
 *    when defined, is the memoized version,
 *    eg: `const myFunction => memoize(() => myFunction())`
 *  - Not sure what the behaviour is if memoizing a function that receives no
 *    parameters.
 * 
 * @param {Function} func
 * @return {Function} 
 */
export function memoize(func) {
	const cache = {};
	return function() {
		let key = Array.from(arguments).join('-');
		let result = cache[key];
		if (!result) {
			result = func(...arguments);
			cache[key] = result;
		}
		return result;
	};
}
