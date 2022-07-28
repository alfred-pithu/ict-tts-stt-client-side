import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SpeechToText from "./components/SpeechToText/SpeechToText";
import TextToSpeech from "./components/TextToSpeech/TextToSpeech";
import TtsAdmin from './components/AdminPanel/TtsAdmin'
import SttAdmin from './components/AdminPanel/SttAdmin'

function App() {
  return (
    <div >

      <Navbar></Navbar>

      <Routes>

        <Route path="/" element={<TextToSpeech></TextToSpeech>}></Route>
        <Route path="/tts" element={<TextToSpeech></TextToSpeech>}></Route>
        <Route path="/stt" element={<SpeechToText></SpeechToText>}></Route>



        <Route path="admin" element={<AdminPanel></AdminPanel>}>

          <Route index element={<TtsAdmin></TtsAdmin>}></Route>
          <Route path="sttadmin" element={<SttAdmin></SttAdmin>}></Route>

        </Route>

      </Routes>

      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
