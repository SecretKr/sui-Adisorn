require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API,
    authDomain: "sui-adisorn.firebaseapp.com",
    databaseURL: "https://sui-adisorn-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sui-adisorn",
    storageBucket: "sui-adisorn.appspot.com",
    messagingSenderId: "649094979313",
    appId: "1:649094979313:web:5c34f44c4c5ce9df399350",
    measurementId: "G-MEVJ8SQSH9"
};

export default firebaseConfig;