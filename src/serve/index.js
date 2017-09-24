import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAvBzPaYbJ5LZgSa0iI7kxBfrRWezmzmHo",
    authDomain: "myweb-52372.firebaseapp.com",
    databaseURL: "https://myweb-52372.firebaseio.com",
    projectId: "myweb-52372",
    storageBucket: "myweb-52372.appspot.com",
    messagingSenderId: "598989526566"
};
firebase.initializeApp(config);

export default firebase