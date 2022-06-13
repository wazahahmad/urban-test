
import logo from './urban.jpeg';
import './App.css';

function App() {
 
  
  const screenW = window.screen.width
  const screenH = window.screen.height
  console.log(screenW, screenH)
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo}
        style={{objectFit:'contain'}} 
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