import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCIPOGP-TbCQs2Lidkg5m0clrGIYoppKgI",
  authDomain: "expensifyapp-88662.firebaseapp.com",
  projectId: "expensifyapp-88662",
  storageBucket: "expensifyapp-88662.appspot.com",
  messagingSenderId: "884551736226",
  appId: "1:884551736226:web:2ee48544cb7e749b37b0fb"
};

firebase.initializeApp(firebaseConfig);

export default firebase;