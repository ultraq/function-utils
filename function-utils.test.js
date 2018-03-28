/* eslint-env jest */
import {memoize} from './function-utils';

/**
 * Tests for the functional programming utilities.
 */
describe('utilities/Functions', function() {

	describe('#memoize', function() {

		test('Caches seen results', function() {
			const functionToMemoize = jest.fn(value => value^2);
			const memoizedFunction = memoize(functionToMemoize);

			memoizedFunction(7);
			expect(functionToMemoize).toHaveBeenCalledTimes(1);
			memoizedFunction(6);
			expect(functionToMemoize).toHaveBeenCalledTimes(2);
			memoizedFunction(7);
			expect(functionToMemoize).toHaveBeenCalledTimes(2);
		});

	});

});
