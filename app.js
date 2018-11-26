const admin = require("firebase-admin");
const {exec} = require('child_process');
const {promisify} = require('util');

const projectId = 'isaax-demo';
const collectionId = 'cpu';
const serviceAccount = require("./isaax-demo-firebase-adminsdk-p27d1-914f648c7d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://isaax-demo.firebaseio.com"
});


setInterval(async () => {
  try {
    const result = await promisify(exec)('vcgencmd measure_temp');
    console.log('result', result);
  } catch (e) {
    console.log(e)
  }
}, 2000);
