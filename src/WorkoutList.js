import React from "react";
import Workout from "./Workout";

function WorkoutList ({workouts}) {

    const workoutList = workouts.map((workout) => {
        return <Workout key={workout.id} name={workout.workout} type={workout.type} />
    })

    return (
        <div className="workoutList">
            {workoutList}
        </div>
    )

}

export default WorkoutList