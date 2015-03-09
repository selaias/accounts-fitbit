# accounts-strava

Login service for Fitbit accounts in Meteor

read more at [https://www.meteor.com/accounts] https://www.meteor.com/accounts


Configure Fitbit services. Example:

```
ServiceConfiguration.configurations.remove({
    service: "fitbit"
  });
  
ServiceConfiguration.configurations.upsert(
  { service: "fitbit" },
  { $set: { consumerKey: <your client_id>, secret: <client_secret> } }
);

```

Using any accounts-ui package it will enable the Sign in with Fitbit button.