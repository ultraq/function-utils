/* eslint-env jest */
import {memoize} from './function-utils';

/**
 * Tests for the functional programming utilities.
 */
describe('function-utils', function() {

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

		test('null/undefined arguments are distinct from one another', function() {
			const functionToMemoize = jest.fn(value => value);
			const memoizedFunction = memoize(functionToMemoize);

			memoizedFunction(null);
			expect(functionToMemoize).toHaveBeenCalledTimes(1);
			memoizedFunction(undefined);
			expect(functionToMemoize).toHaveBeenCalledTimes(2);
		});

		test('Objects should create distinct keys', function() {
			const functionToMemoize = jest.fn(value => value);
			const memoizedFunction = memoize(functionToMemoize);

			memoizedFunction({ message: 'Hello!' });
			expect(functionToMemoize).toHaveBeenCalledTimes(1);
			memoizedFunction({ message: 'Goodbye' });
			expect(functionToMemoize).toHaveBeenCalledTimes(2);
		});

		test('Functions generate keys based off their contents', function() {
			const functionToMemoize = jest.fn(value => value);
			const memoizedFunction = memoize(functionToMemoize);

			memoizedFunction(() => 2 + 2);
			expect(functionToMemoize).toHaveBeenCalledTimes(1);
			memoizedFunction(() => 1 + 1);
			expect(functionToMemoize).toHaveBeenCalledTimes(2);
		});
	});
});
