/*/ firebase.js
const firebase = require('firebase/app');
// Initialize Firebase Admin SDK (for database and authentication management)
//const serviceAccount = require('./path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //databaseURL: "https://your-database-url.firebaseio.com"
});

// Firebase SDK setup for auth operations
const firebaseConfig = {
    apiKey: "AIzaSyDoSnXquw0VCEshV6yuUweVoEvew8ulblI",
    authDomain: "nauhenyosystem.firebaseapp.com",
    projectId: "nauhenyosystem",
    storageBucket: "nauhenyosystem.firebasestorage.app",
    messagingSenderId: "954332793298",
    appId: "1:954332793298:web:180993f99bcf3f5446a00b",
    measurementId: "G-2W9ZC56VBP"
};

firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();

module.exports = { auth };
*/