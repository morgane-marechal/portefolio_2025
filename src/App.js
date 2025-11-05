import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import theme from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div
          className="cursor-light"
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
