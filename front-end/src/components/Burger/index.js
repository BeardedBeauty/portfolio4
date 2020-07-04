import React from "react";
import "./style.css";

function Burger(props) {
    return (
        <div class="menu-wrap">
            <input type="checkbox" class="toggler" />
            <div class="hamburger"><div></div></div>
            <div class="menu">
                <div>
                    <div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">B</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burger;