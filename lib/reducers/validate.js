export default function (object, ...args) {
    if (_.isFunction(object.validate)) {
        object.validate.call(this, ...args);
    }
}