import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SpeechToText from "./components/SpeechToText/SpeechToText";
import TextToSpeech from "./components/TextToSpeech/TextToSpeech";

function App() {
  return (
    <div >

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<TextToSpeech></TextToSpeech>}></Route>
        <Route path="/tts" element={<TextToSpeech></TextToSpeech>}></Route>
        <Route path="/stt" element={<SpeechToText></SpeechToText>}></Route>
      </Routes>

      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
