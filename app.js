const projectId = 'isaax-demo';
const collectionId = 'cpu';

const admin = require("firebase-admin");

const serviceAccount = require("./isaax-demo-firebase-adminsdk-p27d1-914f648c7d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://isaax-demo.firebaseio.com"
});
