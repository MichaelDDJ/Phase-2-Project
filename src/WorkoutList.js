import React from "react";
import Workout from "./Workout";

function WorkoutList ({workouts}) {
    console.log(workouts)

    const workoutList = workouts.map((workout) => {
        return <Workout key={workout.id} name={workout.workout} type={workout.type} />
    })

    return (
        <div className="workoutList">
            <h1>WorkoutList</h1>
            {workoutList}
        </div>
    )

}

export default WorkoutList