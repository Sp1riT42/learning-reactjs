import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyDzW6yxtIDrClQgPj8rXYCPs1aHgmnISp4",
    authDomain: "gb-chat-cbbd3.firebaseapp.com",
    databaseURL: "https://gb-chat-cbbd3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-chat-cbbd3",
    storageBucket: "gb-chat-cbbd3.appspot.com",
    messagingSenderId: "770246664384",
    appId: "1:770246664384:web:84344ba13d85525547cd25",
    measurementId: "G-MRHH0RJ9BV"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.database()