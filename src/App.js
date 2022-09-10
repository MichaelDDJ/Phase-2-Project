import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import {Switch, Link, Route} from "react-router-dom";

function App() {

  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/workouts")
    .then((r) => r.json())
    .then(data => setWorkouts(data))
  }, [])

  console.log(workouts)

  return (
    <div className="App">
      <Header />
      <Main workouts={workouts} />
    </div>
  );
}

export default App;
