const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});


exports.log = functions.database.ref('/forminfo').onCreate(  event => { 

  var thedata = event.data.val();
  console.log(thedata);

  return 0
});


