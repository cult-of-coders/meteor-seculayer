export default function (object, ...args) {
    if (options.exception) {
        const run = object.run;
        object.run = function () {
            try {
                return run(...args)
            } catch (e) {
                options.exception.call(e);
            }
        }
    }
}