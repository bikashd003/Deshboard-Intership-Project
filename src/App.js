import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from '../src/Components/Home'
import Modules from '../src/Components/Modules'
import Instructor from '../src/Components/Instructor'
import HomeContent from './Components/HomeContent';
import ActiveTopic from "./Components/ActiveTopic";
import '../src/App.css'
import Quiz from "./Components/Quiz";
import Assignment from "./Components/Assignment";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Home />
        <Routes>
          <Route exect path="/" element={(<><Home /> <HomeContent/></>)} />
          <Route path="/modules" element={(<> <Home /> <Modules /> </>)} />
          <Route path="/instructor" element={(<> <Home /> <Instructor /> </>)} />
          <Route path="/active-topic" element={(<> <Home /> <ActiveTopic /> </>)} />
          <Route path="/quiz-1" element={(<> <Home /> <Quiz /> </>)} />
          <Route path="/assignment-1" element={(<> <Home /> <Assignment /> </>)} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
