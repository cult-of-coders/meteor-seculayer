export default function () {
    if (object.loggedIn) {
        if (!this.userId) {
            throw new Meteor.Error(401, 'You are not logged in.');
        }
    }
}