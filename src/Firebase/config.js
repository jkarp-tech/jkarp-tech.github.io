import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAhlxcazGlKSc4qOIfd5dIyeQZeL2tZor0",
    authDomain: "lkphoto-3c3eb.firebaseapp.com",
    databaseURL: "https://lkphoto-3c3eb.firebaseio.com",
    projectId: "lkphoto-3c3eb",
    storageBucket: "lkphoto-3c3eb.appspot.com",
    messagingSenderId: "687499793788",
    appId: "1:687499793788:web:be125e0991f8acc5da40f9",
    measurementId: "G-XZ1SLWMPRM",
};

firebase.initializeApp(config);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
