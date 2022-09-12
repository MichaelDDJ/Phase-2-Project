import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    
    return (
        <div>
            <NavLink to="/" style={{color: "blueviolet"}}>Home</NavLink>
            <NavLink to="/WorkoutList" >WorkoutList</NavLink>
            <NavLink to="/MyWorkouts" >MyWorkouts</NavLink>
            <NavLink to="/WorkoutForm" >WorkoutForm</NavLink>
        </div>
    )

}

export default NavBar;