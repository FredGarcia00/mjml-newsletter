import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp ( {
  apiKey: "AIzaSyDSSV5oTGJCdWva8SD8V0cuFnCQo0Vs3x0",
  authDomain: "redux-6bdca.firebaseapp.com",
  databaseURL: "https://redux-6bdca.firebaseio.com",
  projectId: "redux-6bdca",
  storageBucket: "redux-6bdca.appspot.com",
  messagingSenderId: "906711205650",
  appId: "1:906711205650:web:d19582ca9ac0e88a19d5cb",
  measurementId: "G-PTJ9BCPKL4"
  });
  
//   const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };