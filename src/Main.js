import React from "react";
import Workout from "./Workout";
import MyWorkouts from "./MyWorkouts";
import WorkoutList from "./WorkoutList";

function Main ({workouts}) {

    return (
        <>
            <MyWorkouts />
            <WorkoutList workouts={workouts} />
        </>
    )

}

export default Main;