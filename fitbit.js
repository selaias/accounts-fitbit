Accounts.oauth.registerService('fitbit');
if (Meteor.isClient) {
  Meteor.loginWithFitbit = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }
    console.log(options)
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Fitbit.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.fitbit'],
    forOtherUsers: ['services.fitbit.displayName', 'services.fitbit.id']
  });
}
