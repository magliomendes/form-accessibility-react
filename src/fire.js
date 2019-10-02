import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCkVvGBPPm4yvcxN1lZkoerouhtcRAM4Qs",
    authDomain: "dynamic-register-form.firebaseapp.com",
    databaseURL: "https://dynamic-register-form.firebaseio.com",
    projectId: "dynamic-register-form",
    storageBucket: "dynamic-register-form.appspot.com",
    messagingSenderId: "172270755862",
    appId: "1:172270755862:web:6016d63c973092dc2e1537",
    measurementId: "G-Q518EJBJVS"
};
var fire = firebase.initializeApp(firebaseConfig);
export default fire;