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
                            <li><div className="internal" onClick={props.top}>Top</div></li>
                            <li><div className="internal" onClick={props.portfolio}>Portfolio</div></li>
                            <li><div className="internal" onClick={props.contact}>Contact</div></li>
                            <li><a href="https://www.linkedin.com/in/john-ochs-b67b32160/">Linkedin</a></li>
                            <li><a href="https://github.com/BeardedBeauty">Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burger;