import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAIY0nELZF6wHlO-A8RqL83o2puU5eA690",
    authDomain: "clone-68399.firebaseapp.com",
    databaseURL: "https://clone-68399.firebaseio.com",
    projectId: "clone-68399",
    storageBucket: "clone-68399.appspot.com",
    messagingSenderId: "613558284642",
    appId: "1:613558284642:web:9ae0165281a3c25b423c3b",
    measurementId: "G-YQ8EMSW0RQ"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};