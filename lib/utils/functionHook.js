/**
 * @param fn
 * @param hook
 * @returns {Function}
 */
export function before(fn, hook) {
    return function(...args) {
        hook.call(this, ...args);

        return fn.call(this, args);
    }
}

/**
 * @param fn
 * @param hook
 * @returns {Function}
 */
export function after(fn, hook) {
    return function(...args) {
        const result = fn.call(args);

        hook.call(this, result, ...args);

        return result;
    }
}