import seculayer from './lib/seculayer';

Meteor.methods = seculayer(Meteor.methods, 'methods');
Meteor.publish = seculayer(Meteor.publish, 'publications');

