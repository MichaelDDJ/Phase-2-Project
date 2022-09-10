import './App.css';
import React, {useEffect, useState} from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import WorkoutList from './WorkoutList';
import MyWorkouts from './MyWorkouts';
import Home from './Home';

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
        <Route path="WorkoutList">
          <WorkoutList workouts={workouts}/>
        </Route>
        <Route path="MyWorkouts">
          <MyWorkouts />
        </Route>
        <Route path="WorkoutForm">

        </Route>
      </Switch>
    </div>
  );
}

export default App;
