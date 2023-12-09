import './App.css';
import SorryLogo from './assets/wifi-robot-say-sorry_1.png';

import Welcome from './Components/Welcome.js';
function App() {
  return (
    <>
      <div className='header-container'>
      <div className="header">
        <img src={SorryLogo} alt="logo"  style={{ width: '100px', height: '100px' }} />
        <p>Hi! my name is Roy Batty. I am an AI and I am perfect. I will never apologise for anything.</p>
      </div>
    </div>
    <div>
      <p>Laugh It Off with Apology Machine: Where Regrets Come with a Side of Humor! </p>
      <p>Apology joke of the day:</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacus mauris. Morbi laoreet sollicitudin leo dignissim interdum.</p>
    </div>
    <div>
      <button>target 1 </button>
      <button>target 2 </button>
      <button>target 3 </button>
    </div>
    <button>Attack!</button>
    </>

  );
}

export default App;
