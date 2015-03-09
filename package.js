Package.describe({
  name: 'selaias:accounts-fitbit',
  version: '0.1.0',
  summary: 'Login service for Fitbit accounts',
  git: 'https://github.com/selaias/accounts-fitbit.git',
  documentation: 'README.md'
});
Package.onUse(function(api) {
  
  api.versionsFrom('1.0.3.1');
  
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  
  api.use('selaias:fitbit@0.1.0', ['client', 'server']);
  
  api.addFiles("fitbit.js");
});