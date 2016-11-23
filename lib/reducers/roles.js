import { Roles } from 'meteor/alaning:roles';

export default function (object, ...args) {
    if (Roles && object.roles) {
        if (!Roles.userIsInRole(this.userId, roles)) {
            throw new Meteor.Error('You are not allowed.');
        }
    }
}