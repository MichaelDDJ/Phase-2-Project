import React from "react";

function Workout ({name, type}) {

    return (
        <div className="workout">
            <h2 className="workout-name">{name}</h2>
            <h5 className="workout-type">{type}</h5>
        </div>
    )

}

export default Workout;