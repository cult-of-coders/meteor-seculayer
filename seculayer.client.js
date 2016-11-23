import seculayer from './lib/seculayer';
import callSync from './lib/utils/syncCall';
import latencyCompensationCall from './lib/utils/latencyCompensationCall';

Meteor.methods = seculayer(Meteor.methods, 'methods');

Meteor.callSync = callSync.bind(Meteor);
Meteor.callLC = latencyCompensationCall.bind(Meteor);
