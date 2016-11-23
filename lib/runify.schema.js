import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export default new SimpleSchema({
    run: {
        type: Function
    },
    mixins: {
        type: [Function],
        optional: true
    }
})