import './App.css';
import SorryLogo from './assets/wifi-robot-say-sorry_1.png';

import Welcome from './Components/Welcome.js';
function App() {
  return (
    <div className='header-container'>
      <div className="header">
        <img src={SorryLogo} alt="logo" />
        <p>Hi User!</p>
      </div>
    </div>
  );
}

export default App;
