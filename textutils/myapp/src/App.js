import './App.css';
import './textutils.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/about';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ message: msg, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      showAlert("Dark Mode has been enabled", "success");
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <BrowserRouter>
        <Navbar title="TextUtils" isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route exact path="/" element={<div className='container'>
            <Textform heading="Enter your Text to be analyzed" showAlert={showAlert} />
          </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
