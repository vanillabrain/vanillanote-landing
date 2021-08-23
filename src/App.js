import './App.css';
import './style.css'
import './i18n/i18n';
import { Header } from './components/header'
import JsonDataKR from './i18n/kr.json'
import JsonDataEN from './i18n/en.json'
import {useEffect, useState} from "react";
import {Note} from "./components/note";
import {Third_row} from "./components/third_row";
import {Form} from "./components/form";
import { thirdKR } from './data/third_KR';
import { thirdEN } from './data/third_EN';
import { useTranslation } from 'react-i18next';
import {Helmet} from "react-helmet";
import Head from 'next/head'

function App() {
    const { t, i18n } = useTranslation();
    var JsonData;
    var third;
  const [landingPageData, setLandingPageData] = useState({})
    console.log(navigator.language);

    if (navigator.language === 'ko') {
        JsonData = JsonDataKR;
        third = thirdKR;
    }
    else {
        JsonData = JsonDataEN;
        third = thirdEN;
    }
  useEffect(() => {
    setLandingPageData(JsonData)
  }, []);

  return (
    <div className="App">
        <Head>
            <title>
                VanillaNote - Notepad, Checklist, Color Labels
            </title>
            <meta name="description" content="VanillaNote is a neat note/checklist app that uses word labels and color labels.
Enter ideas that come into mind anytime, anywhere, and save them right into your notes.
Also, you can create your own label rules and use them in various ways.
Text labels allow you to view notes grouped by tabs.
Color labels allow you to view notes grouped by color.
- When you're finished using the notepad, click the back button to save your note."
            data-react-helmet="true" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://vanillanoteapp.web.app" />
            <meta property="og:title" content="VanillaNote - Notepad, Checklist, Color Labels" />
            <meta property="og:description" content="VanillaNote is a neat note/checklist app that uses word labels and color labels.
Enter ideas that come into mind anytime, anywhere, and save them right into your notes.
Also, you can create your own label rules and use them in various ways.
Text labels allow you to view notes grouped by tabs.
Color labels allow you to view notes grouped by color.
- When you're finished using the notepad, click the back button to save your note."
                  data-react-helmet="true" />
        </Head>
      <Header data={landingPageData.Header} />
      <Note data={landingPageData.Note} />
      <Third_row data={third} />
      <Form data={landingPageData.Form} />
    </div>
  );
}

export default App;
