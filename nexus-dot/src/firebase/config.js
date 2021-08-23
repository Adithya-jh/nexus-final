// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC87fa2sRsY9RHJzSWsJqt_2qbI_POOUlg",
    authDomain: "music-app-d63ee.firebaseapp.com",
    projectId: "music-app-d63ee",
    storageBucket: "music-app-d63ee.appspot.com",
    messagingSenderId: "468319670819",
    appId: "1:468319670819:web:da70bc82f778af9dcb1796",
    measurementId: "G-DFSGZJ1678"
  };

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth,projectFirestore,timestamp,projectStorage}