import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyA37gOxNdwnRBi54FIrMcfEBACHVz2HtUc",
    authDomain: "giftshop-22e8b.firebaseapp.com",
    projectId: "giftshop-22e8b",
    storageBucket: "giftshop-22e8b.appspot.com",
    messagingSenderId: "179753400478",
    appId: "1:179753400478:web:c7d82a188d1037b011638f"
  };

  const fireBaseApp=firebase.initializeApp(firebaseConfig)


  const db = fireBaseApp.firestore();
  const auth= firebase.auth();

  export {db,auth};