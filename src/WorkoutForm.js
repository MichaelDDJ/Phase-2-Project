import React from "react";

function WorkoutForm () {

    return (
        <div className="workout-form">
            <h1>Workout Form</h1>
            <form>
                <input type="text" placeholder="Enter workout name..."></input>
                <br></br>
                <input type="text" placeholder="Enter workout type..."></input>
                <br></br>
                <button >Submit new workout</button>
            </form>
        </div>
        
    )

}

export default WorkoutForm;