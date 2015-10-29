// Package metadata file for Meteor.js
var packageName = 'aaronroberson:angular-cloudinary';
var where = 'client';
var version = '1.2.2';
var summary = 'Cloudinary AngularJS directives to display and update images and videos.';
var gitLink = 'https://github.com/aaronroberson/angular-cloudinary';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.use('angular:angular@1.3.0', where)

  api.addFiles([
  'angular-cloudinary.js',
  'dist/angular-strap.tpl.js'
  ], where);
}); 
