import React from "react";
import Workout from "./Workout";

function WorkoutList ({workouts, handleWorkoutClick}) {
    

    const workoutList = workouts.map((workout) => {
        return <Workout key={workout.id} name={workout.workout} type={workout.type} func={handleWorkoutClick} />
    })

    return (
        <div className="workout-list">
            <h1>WorkoutList</h1>
            {workoutList}
        </div>
    )

}

export default WorkoutList