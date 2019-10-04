import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCwtA6uDOGbDlCrrbO3tYq1I9T5joZRWXE",
    authDomain: "labooktory.firebaseapp.com",
    databaseURL: "https://labooktory.firebaseio.com",
    projectId: "labooktory",
    storageBucket: "",
    messagingSenderId: "87100665675",
    appId: "1:87100665675:web:ce5a4158b919fdc8c1c2ce",
    measurementId: "G-JPN7VMW8P5"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;