import React from "react";
import Workout from "./Workout";

function MyWorkouts ({filteredWorkouts, handleDelete}) {

    const myWorkoutList = filteredWorkouts.map((workout) => {
        return <Workout key={workout.id} name={workout.workout} type={workout.type} func={handleDelete} />
    })

    return (
        <div className="my-workouts">
            <h1>MyWorkouts</h1>
            {myWorkoutList}
        </div>
    )

}

export default MyWorkouts;