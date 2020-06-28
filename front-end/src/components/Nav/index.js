import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <>
            <div className={`nav ${props.nav[0]}`}></div>
            <nav className="nav">
                <div className="itemsContainer">
                    {/* <p className={`name trans name${props.nav[1]}`}>john ochs</p> */}
                    <div className={`navlink trans nav${props.nav[1]}`}>HOME</div>
                    <div className={`navlink trans nav${props.nav[1]}`}>ABOUT</div>
                    <div className={`navlink trans nav${props.nav[1]}`}>PORTFOLIO</div>
                    <div className={`navlink trans nav${props.nav[1]}`}>MUSIC</div>
                    <div className={`navlink trans nav${props.nav[1]}`}>CONTACT</div>
                </div>
            </nav>
            <nav className="mobilenav">
                <p>|||</p>
            </nav>
        </>
    )
}

export default Nav;