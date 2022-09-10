import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    
    return (
        <div>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/WorkoutList" exact>WorkoutList</NavLink>
            <NavLink to="/MyWorkouts" exact>MyWorkouts</NavLink>
            <NavLink to="/WorkoutForm" exact>WorkoutForm</NavLink>
        </div>
    )

}

export default NavBar;