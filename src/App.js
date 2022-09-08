import './App.css';
import Header from './Header';
import Main from './Main';
import {Switch, Link, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
