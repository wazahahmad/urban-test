import { useEffect } from 'react';
import logo from './urban.jpeg';
import './App.css';
import ReactGA from 'react-ga';
ReactGA.initialize('G-GNJZDYYJ75');
function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  
  const screenW = window.screen.width
  const screenH = window.screen.height
  console.log(screenW, screenH)
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo}
        style={{objectFit:'contain', width:screenW, height:screenH}} 
        // className="App-logo"
         alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
    </div>
  );
}

export default App;