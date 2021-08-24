import '../styles/style.css'
import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => {
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
  return <Component {...pageProps} />
}
//
//
//
// const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />
//
export default appWithTranslation(MyApp)
