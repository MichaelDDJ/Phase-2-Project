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

  handleAddMyWorkout () {

  }

  console.log(workouts)

  return (
    <div className="App">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WorkoutList" element={<WorkoutList workouts={workouts} handleAddMyWorkout={handleAddMyWorkout} />} />
        <Route path="/MyWorkouts" element={<MyWorkouts workouts={workouts} />} />
        <Route path="/WorkoutForm" element={<WorkoutForm />} />
      </Routes>
    </div>
  );
}

export default App;
