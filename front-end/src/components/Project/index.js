import React from "react";

function Project(props) {
    return (
        <a href={props.link}>
            <div class="projContainer">
                <img src={props.source} alt="proj" class="project" />
                <div class="overlay trans">{props.title}</div>
            </div>
        </a>
    )
}

export default Project;