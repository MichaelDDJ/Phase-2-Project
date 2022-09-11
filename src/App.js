import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import WorkoutList from './WorkoutList';
import MyWorkouts from './MyWorkouts';
import Home from './Home';
import WorkoutForm from './WorkoutForm';

function App() {

  const [workouts, setWorkouts] = useState([])
  const [filteredWorkouts, setFilteredWorkouts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/workouts")
    .then((r) => r.json())
    .then(data => setWorkouts(data))
  }, [])

  function handleWorkoutClick (event) {
    let x;

    switch (event.target.className) {
      case "workout": x = event.target.firstChild.textContent;
        break;
      case "workout-name": x = event.target.textContent;
        break;
      case "workout-type": x = event.target.previousSibling.textContent;
        break;
      default: alert("There was an error. Please refresh or try again.");
        break;
    }


    setFilteredWorkouts([...filteredWorkouts, workouts.filter((workout) => {
      return workout.workout == x
    })].flat())

    console.log(filteredWorkouts)
  }

  return (
    <div className="App">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WorkoutList" element={<WorkoutList workouts={workouts} handleWorkoutClick={handleWorkoutClick} />} />
        <Route path="/MyWorkouts" element={<MyWorkouts workouts={workouts} filteredWorkouts={filteredWorkouts} />} />
        <Route path="/WorkoutForm" element={<WorkoutForm />} />
      </Routes>
    </div>
  );
}

export default App;
