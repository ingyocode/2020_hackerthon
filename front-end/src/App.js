import React from "react";
import { Typography } from "@material-ui/core";

<<<<<<< Updated upstream
class App extends React.Component {
  render() {
    return (
      <div>
        <Typography>Testing</Typography>
      </div>
    );
  }
=======
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testing   
        </a>
      </header>
    </div>
  );
>>>>>>> Stashed changes
}

export default App
 