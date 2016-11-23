Package.describe({
  name: 'cultofcoders:seculayer',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('underscore');
  api.use('aldeed:simple-schema@1.5.3');

  api.mainModule('seculayer.server.js', 'server');
  api.mainModule('seculayer.client.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('cultofcoders:seculayer');

  api.use('practicalmeteor:mocha');
  api.use('practicalmeteor:chai');

  api.addFiles('./testing/boot.js', 'server');
  api.mainModule('./testing/server.js', 'server');
  api.mainModule('./testing/client.js', 'client');
});
