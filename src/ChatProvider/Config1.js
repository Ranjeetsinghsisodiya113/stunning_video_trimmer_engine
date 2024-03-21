import Firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDX2X8DdYjH9Lugl1hgn3Tyx_i_WvQH5Yo",
    authDomain: "sampleproject-a577c.firebaseapp.com",
    projectId: "sampleproject-a577c",
    storageBucket: "sampleproject-a577c.appspot.com",
    messagingSenderId: "450308384226",
    databaseURL: "https://sampleproject-a577c-default-rtdb.firebaseio.com",
    appId: "1:450308384226:web:a3df2ecf19893f68cb45bb"
};


let firebase = Firebase.initializeApp(config);
export default firebase