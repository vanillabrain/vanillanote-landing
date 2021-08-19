'use strict';
import firebase from "firebase/app";

//grab a form
//const form = document.querySelector('.form');

//grab inputs
const inputEmail = document.querySelector('#writer_email');
const writerName = document.querySelector('#writer_name');
const content = document.querySelector('#form_content');

//config your firebase push
const config = {
    apiKey: "AIzaSyAWs7ItBH2E7ATOyEsTEJThxBcYnjRt7wM",
    authDomain: "vanillanoteapp.web.app",
    databaseURL: "https://vanillanoteapp-default-rtdb.firebaseio.com/",
    projectId: "vanillanoteapp",
    storageBucket: "vanillanoteapp.appspot.com",
    messagingSenderId: "443932673550"
};


//create a functions to push
function firebasePush(email, writer_name, content) {


    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    //push itself
    var mailsRef = firebase.database().ref('queries').push().set(
        {
            writerName: "testing",//writer_name.value,
            mail: "testing",//email.value,
            content: "testing",//content.value
        }
    );

}

//push on form submit
if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        firebasePush(inputEmail, writerName, content);

        //shows alert if everything went well.
        return alert('Data Successfully Sent to Realtime Database');
    })
}
