import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyBdmRV-1C2d-EEcwJYPBlKYY9yZ4bFt_bs",
    authDomain: "caloriescalculator-7ef6b.firebaseapp.com",
    databaseURL: "https://caloriescalculator-7ef6b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "caloriescalculator-7ef6b",
    storageBucket: "caloriescalculator-7ef6b.appspot.com",
    messagingSenderId: "453173679820",
    appId: "1:453173679820:web:c85611de33740a373d5469",
    measurementId: "G-281X7DQX3N"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {db};
export default firebase;
