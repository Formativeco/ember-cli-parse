import Ember from 'ember';
import config from '../config/environment';

export default {
    name: 'parse-auth',
    //after: '',
    initialize: function(instance) {
        Parse.initialize(
  "S7f3ai3tVf0XXX98ePlZj6RIn7bXzgdlzPMoMD4f",
  "792eH4ZmksZxKSc8AUWj6Or2IXSzMnrMdPgfoGQ7"
);
Parse.serverURL = 'https://pg-app-29xaespgs1zrsce21g5bcidie2h9xk.scalabl.cloud';
        var pa = instance.lookup("service:parse-auth");
        pa.register_instance(instance);

        if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/) || typeof facebookConnectPlugin === "undefined") {
            window.fbAsyncInit = function () {
                Parse.FacebookUtils.init({ // this line replaces FB.init({
                    appId: config.parse.FacebookAppId, // Facebook App ID
                    //status: false,  // check Facebook Login status
                    cookie: true,  // enable cookies to allow Parse to access the session
                    xfbml: false,  // initialize Facebook social plugins on the page
                    version: 'v2.3' // point to the latest Facebook Graph API version
                });

                // Run code after the Facebook SDK is loaded.
            };


            Ember.$('body').append(Ember.$("<div>").attr('id', 'fb-root'));
            Ember.$.ajaxSetup({ cache: true });
            Ember.$.getScript('https://connect.facebook.net/en_US/sdk.js');

        }
    }
};
