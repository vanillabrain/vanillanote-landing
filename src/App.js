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
      <Header data={landingPageData.Header} />
      <Note data={landingPageData.Note} />
      <Third_row data={third} />
      <Form data={landingPageData.Form} />
    </div>
  );
}

export default App;
