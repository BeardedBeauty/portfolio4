import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <>
            <div className={`nav ${props.nav[0]}`}></div>
            <nav className="nav">
                <div className="itemsContainer">
                    <div className={`navlink trans nav${props.nav[1]}`} onClick={props.top}>HOME</div>
                    <div className={`navlink trans nav${props.nav[1]}`} onClick={props.portfolio}>PORTFOLIO</div>
                    {/* <div className={`navlink trans nav${props.nav[1]}`}>MUSIC</div> */}
                    <div className={`navlink trans nav${props.nav[1]}`} onClick={props.contact}>CONTACT</div>
                    <a href="https://www.linkedin.com/in/john-ochs-b67b32160/">
                        <div className={`navlink trans nav${props.nav[1]}`}>LINKEDIN</div>
                    </a>
                    <a href="https://github.com/BeardedBeauty">
                        <div className={`navlink trans nav${props.nav[1]}`}>GITHUB</div>
                    </a>
                </div>
            </nav>
            <nav className="mobilenav"></nav>
        </>
    )
}

export default Nav;