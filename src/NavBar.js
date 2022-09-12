import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    
    return (
        <div>
            <NavLink to="/" className={"navlink"} >Home</NavLink>
            <NavLink to="/WorkoutList" className={"navlink"} >WorkoutList</NavLink>
            <NavLink to="/MyWorkouts" className={"navlink"} >MyWorkouts</NavLink>
            <NavLink to="/WorkoutForm" className={"navlink"} >WorkoutForm</NavLink>
        </div>
    )

}

export default NavBar;