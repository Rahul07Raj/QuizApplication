import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Quiz from "./components/Quiz";
import Navbar from "./components/Navbar";
import Video from "./components/Video";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/text_quiz" element={<Quiz />} />
          <Route path="/video_quiz" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
