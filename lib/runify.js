import RunifySchema from './runify.schema';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { _ } from 'meteor/underscore';
import schemaMixin from './reducers/schema';
import validateMixin from './reducers/validate';
import firewallMixin from './reducers/firewall';

export default function (object) {
    RunifySchema.validate(object);

    object.mixins = object.mixins || [];

    object.mixins.push(schemaMixin);
    object.mixins.push(firewallMixin);
    object.mixins.push(validateMixin);

    return function (...args) {
        object.mixins.forEach(mixin => {
            mixin.call(this, object, ...args);
        });

        return object.run.call(this, ...args);
    }
}