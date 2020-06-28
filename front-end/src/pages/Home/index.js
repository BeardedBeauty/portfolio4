import React from "react";
import "./style.css";
import bgimg from "../../assets/bg.jpg";
import me from "../../assets/tree2.png";

function Home(props) {
    return (
        <>
            <div className="bacgroundcontainer">
                <img src={bgimg} id="defaultbackground" />
                {/* <img src="https://images3.alphacoders.com/773/773135.jpg" id="defaultbackground" /> */}
            </div>
            <div className="loco">
                <div className="header">
                    <p id="headerTitle">{"<John Ochs/>"}</p>
                    <div className="subheader smol">
                        <p className="sub">Full-Stack Web Developer</p>
                        <p className="sub">Freelance | Full Time | Contract</p>
                    </div>
                    <div className="subheader wide">
                        <p className="sub">Full-Stack Web Developer | Freelance | Full Time | Contract</p>
                    </div>
                </div>
            </div>
            <div className="freight">
                <div className="intermodal">
                    <div className="meholder">
                        <img src={me} id="me" />
                    </div>
                    <div className="biocontainer">
                        <p id="bio">
                            I am a graduate from the University of Minnesota Coding Bootcamp, building full-stack websites and apps for both personal and professional use.
                            Building websites is not only my job, it is my hobby as well.
                            My freelance experience gives an abundance of resources, effictively mining the best code for individual projects based on customer needs and requirements.
                            If you are game for a new, professional website, so am I.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;