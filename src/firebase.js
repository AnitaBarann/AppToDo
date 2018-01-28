import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAKelDZay-DAHJTDqsyd1T1A5Px7GLZJcs",
    authDomain: "app-to-do-c32f6.firebaseapp.com",
    databaseURL: "https://app-to-do-c32f6.firebaseio.com/",
    projectId: "app-to-do-c32f6",
    storageBucket: "app-to-do-c32f6.appspot.com",
    messagingSenderId: "831065601511"
};

const firebaseApp = firebase.initializeApp(config);

export const database = firebaseApp.database();