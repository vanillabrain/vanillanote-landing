import './App.css';
import './style.css'
import { Header } from './components/header'
import JsonData from './data/data.json'
import {useEffect, useState} from "react";
import {Note} from "./components/note";
import {Third} from "./components/third";
import {Form} from "./components/form";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

function App() {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
      <ThemeProvider theme={theme}>
    <div className="App">
      <Header data={landingPageData.Header} />
      <Note data={landingPageData.Note} />
        <Third data={landingPageData.Third} />
        <Form data={landingPageData.Form} />
    </div>
      </ThemeProvider>
  );
}

export default App;
