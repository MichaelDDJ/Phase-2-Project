import React from "react";

function WorkoutForm ({name, type, setName, setType, handleSubmit}) {

    return (
        <div className="workout-form">
            <h1>Workout Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter workout name..." onChange={(e) => setName(e.target.value)} value={name} ></input>
                <br></br>
                <input type="text" placeholder="Enter workout type..." onChange={(e) => setType(e.target.value)} value={type} ></input>
                <br></br>
                <button>Submit new workout</button>
            </form>
        </div>
        
    )

}

export default WorkoutForm;