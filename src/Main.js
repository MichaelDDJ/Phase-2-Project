import React from "react";
import Workout from "./Workout";

function Main ({workouts}) {

    const workoutList = workouts.map((workout) => {
        return <Workout key={workout.id} name={workout.workout} type={workout.type} />
    })

    return (
        <div>
            {workoutList}
        </div>
    )

}

export default Main;