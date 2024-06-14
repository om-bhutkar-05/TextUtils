import './App.css';
import Navbar from './components/Navbar.js'
import Tbox from './components/Textform.js'
function App() {
  return (
<>
<Navbar title="TextUtils"/>
<div className='container'>
<Tbox  heading="Enter your Text to be analyzed" />
</div>
</>
  );
}

export default App;
