import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwQgQnTgQxn-fTXiSW4wsvPcneIqLg8kU",
    authDomain: "facebook-myclone-21ef1.firebaseapp.com",
    databaseURL: "https://facebook-myclone-21ef1.firebaseio.com",
    projectId: "facebook-myclone-21ef1",
    storageBucket: "facebook-myclone-21ef1.appspot.com",
    messagingSenderId: "1003162630638",
    appId: "1:1003162630638:web:0b2d4730fb13ac1351f6ff",
    measurementId: "G-V1BD9XFC27"
  };

  //Connection between firebase with React
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;