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
  const [name, setName] = useState("")
  const [type, setType] = useState("")

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


    function addWorkout () {
      let addedWorkout = workouts.filter((workout) => workout.workout === x)
      setFilteredWorkouts([...filteredWorkouts, addedWorkout].flat())
      alert("Workout added to My Workouts list!")
    }
    
    if (filteredWorkouts.length == 0) {
      addWorkout()
    } else {
      let workoutCheck = filteredWorkouts.find(element => element.workout === x)
      workoutCheck === undefined ? addWorkout() : alert('Item already added')
    }

  }

  function handleDelete (event) {
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

    const q = filteredWorkouts.filter((workout) => {
      return workout.workout !== x
    })

    setFilteredWorkouts(q)
  }

  function handleSubmit (event) {
    event.preventDefault();

    const formData = {workout: name, type: type}

    fetch("http://localhost:3000/workouts", {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => setWorkouts(...workouts, data))

  }

  console.log(workouts)

  return (
    <div className="App">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WorkoutList" element={<WorkoutList workouts={workouts} handleWorkoutClick={handleWorkoutClick} />} />
        <Route path="/MyWorkouts" element={<MyWorkouts filteredWorkouts={filteredWorkouts} handleDelete={handleDelete} />} />
        <Route path="/WorkoutForm" element={<WorkoutForm name={name} setName={setName} type={type} setType={setType} handleSubmit={handleSubmit} />} />
      </Routes>
    </div>
  );
}

export default App;
