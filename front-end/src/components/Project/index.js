import React, { useState, useEffect } from "react";
import git from "../../assets/iu.png";

function Project(props) {
    const [github, link] = useState(<></>);
    useEffect(() => {
        props.gitlink && link(<a href={props.gitlink}>
            <div className="gitLink trans">
                <img src={git} className="github1" />
            </div>
        </a>)
    }, []);
    return (
        <a href={props.link}>
            <div class="projContainer">
                <img src={props.source} alt="proj" class="project" />
                <div class="overlay trans">
                    {props.title}
                    {github}
                </div>
            </div>
        </a>
    )
}

export default Project;