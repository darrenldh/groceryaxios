import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyA81TEXDfxDeM5ORmvpO87sPckfGjPZiHQ",
    authDomain: "axios-2a81c.firebaseapp.com",
    databaseURL: "https://axios-2a81c.firebaseio.com",
    projectId: "axios-2a81c"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;