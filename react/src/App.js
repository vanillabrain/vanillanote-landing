import './App.css';
import './style.css'
import { Header } from './components/header'
import JsonData from './data/data.json'
import {useEffect, useState} from "react";
import {Note} from "./components/note";
import {Third_row} from "./components/third_row";
import {Form} from "./components/form";

function App() {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div className="App">
      <Header data={landingPageData.Header} />
      <Note data={landingPageData.Note} />
      <Third_row data={landingPageData.Third} />
      <Form data={landingPageData.Form} />
    </div>
  );
}

export default App;
