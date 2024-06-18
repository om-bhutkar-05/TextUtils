import './App.css';
import './textutils.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.js'
import Tbox from './components/Textform.js'
import About from './components/about.js'
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  return (
<>

<div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
 <Navbar title="TextUtils" isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
<div className='container'>
<Tbox  heading="Enter your Text to be analyzed" />
<About isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/> 
</div>
</div>
</>
  );
}

export default App;
