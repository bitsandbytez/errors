Package.describe({
  name: 'bitsandbytez:errors',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A pattern to display the application errors to the user',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bitsandbytez/errors.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.2.1');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js', 'error_list.html', 'error_list.js'], 'client');

  if(api.export){
    api.export('errors');
  }
});
