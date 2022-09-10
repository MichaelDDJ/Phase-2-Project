import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import NavBar from './NavBar';
import {Switch, Link, Route} from "react-router-dom";
import WorkoutList from './WorkoutList';
import MyWorkouts from './MyWorkouts';

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
      <NavBar />
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="">
          <WorkoutList workouts={workouts}/>
        </Route>
        <Route path="">
          <MyWorkouts />
        </Route>
        <Route path="">

        </Route>
      </Switch>
    </div>
  );
}

export default App;
