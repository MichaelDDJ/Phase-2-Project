import React from "react";

function Workout ({name, type, func}) {

    return (
        <div className="workout" onClick={func}>
            <h2 className="workout-name">{name}</h2>
            <h5 className="workout-type">{type}</h5>
        </div>
    )

}

export default Workout;