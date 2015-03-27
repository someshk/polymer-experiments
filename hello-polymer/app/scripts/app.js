(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.appName = 'Polymer Experiments';

  // Set the default page to home
  app.page = 'home';

  // Google API Keys - TODO - May have to find the right place to set Developer API keys
  app.googleClientId = '384334855036-gou8qpfutdijngd754lngg1cd6r59icg.apps.googleusercontent.com';

  app.googleAPIKey = 'AIzaSyDlHPCEVFarkbk87GYb7X74H4zWZM49z8I';

  app.googleAPIScopes = 'https://www.googleapis.com/auth/plus.me';

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function() {
    console.log('Our app is ready to rock!');
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));