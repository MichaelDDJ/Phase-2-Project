import React from "react";

function WorkoutForm ({name, type, setName, setType, handleSubmit}) {

    return (
        <div className="workout-form">
            <h1>Workout Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter workout name..." onChange={(e) => setName(e.target.value)} value={name} ></input>
                <br></br>
                <select id="type select" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="upper">upper</option>
                    <option value="lower">lower</option>
                    <option value="full">full</option>
                </select>
                <br></br>
                <button>Submit new workout</button>
            </form>
        </div>
        
    )

}

export default WorkoutForm;