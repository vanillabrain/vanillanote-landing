import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import firebase from "firebase/app"

const config = {
    apiKey: "AIzaSyAWs7ItBH2E7ATOyEsTEJThxBcYnjRt7wM",
    authDomain: "vanillanoteapp.web.app",
    databaseURL: "https://vanillanoteapp-default-rtdb.firebaseio.com/",
    projectId: "vanillanoteapp",
    storageBucket: "vanillanoteapp.appspot.com",
    messagingSenderId: "443932673550"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

document.addEventListener('DOMContentLoaded', function () {
    //const loadEl = document.querySelector('#load');
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.firestore().doc('/foo/bar').get().then(() => { });
    // firebase.functions().httpsCallable('yourFunction')().then(() => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    // firebase.analytics(); // call to activate
    // firebase.analytics().logEvent('tutorial_completed');
    // firebase.performance(); // call to activate
    //
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

    try {
        let app = firebase.app();
        let features = [
            'auth',
            'database',
            'firestore',
            'functions',
            'messaging',
            'storage',
            'analytics',
            'remoteConfig',
            'performance',
        ].filter(feature => typeof app[feature] === 'function');
       // loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
        console.log("Firebase sdk loaded");
    } catch (e) {
        console.error(e);
        console.log("Error loading the firebase sdk");
        //loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
    }
});

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
