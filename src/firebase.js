'use strict';
import firebase from "firebase/app";

//grab a form
const form = document.querySelector('.form');

//grab inputs
const inputEmail = form.querySelector('#writer_email');
const writerName = form.querySelector('#writer_name');
const content = form.querySelector('#form_content');

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
            writerName: writer_name.value,
            mail: email.value,
            content: content.value
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
