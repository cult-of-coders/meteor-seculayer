import Store from './store';
import runify from './runify';

export default function(fn, storeKey) {
    const runner = function(hash, defaults = {}) {
        if (_.isString(hash)) {
            if (!_.isFunction(defaults)) {
                throw new Meteor.Error('The second argument should be a function if you used a string as the first');
            }

            runner({
                [hash]: {run: defaults}
            })
        }

        let builder = {};
        _.each(hash, (body, methodName) => {
            let build = {};
            if (_.isFunction(body)) {
                build.run = body;
            }

            if (defaults) {
                _.extend(build, defaults);
            }

            _.extend(Store[storeKey], {
                [methodName]: build
            });

            builder[methodName] = runify(build);
        });

        fn.call(Meteor, builder);
    };
};