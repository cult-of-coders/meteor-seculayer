export default function (object, ...args) {
    if (_.isFunction(object.firewall)) {
        object.firewall.call(this, this.userId, ...args);
    }
}