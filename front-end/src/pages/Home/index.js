import React from "react";
import Project from "../../components/Project";
import "./style.css";
import bgimg from "../../assets/bg.jpg";
import me from "../../assets/tree2.png";
import resume from "../../assets/resumeDev7.pdf";
import bookke from "../../assets/bookke.png";
import bandaid from "../../assets/bandaid.png";
import cheese from "../../assets/cheese.png";
import mac from "../../assets/mac.png";
import tm3k from "../../assets/tm3k.png";
import wgs from "../../assets/wgs.png";

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
            <div className="everythingContainer">
                <div className="freight">
                    <div className="intermodal">
                        <div className="meholder">
                            <img src={me} id="me" />
                        </div>
                        <div className="biocontainer">
                            <p id="bio">
                                I am a graduate from the University of Minnesota Coding Bootcamp, building full-stack websites and apps for both personal and professional use.
                                Building websites is not only my job, it is my hobby as well.
                                My freelance experience gives an abundance of resources, effectively mining the best code for individual projects based on customer needs and requirements.
                                If you are game for a new, professional website, so am I.
                            </p>
                        </div>
                        <div className="clearfix">
                            <a href={resume}><div className="button1 trans buttonContainer">VIEW RESUME</div></a>
                        </div>
                    </div>
                </div>
                <div className="subtitle">
                    <p className="miniTitle">{"<Portfolio/>"}</p>
                </div>
                <div id="portfolio" className="freight">
                    <div className="intermodal">
                        <div className="subMiniTitle">
                            <p>{`{Professional Projects}`}</p>
                        </div>
                        <Project source={wgs} title={"Write Guy Services"} link={"https://writeguyservices.herokuapp.com/"} />
                        <Project source={mac} title={"Marty's Arts Continuum"} link={"http://www.martysartscontinuum.com"} />
                        <div className="subMiniTitle">
                            <p>{`{Personal Projects}`}</p>
                        </div>
                        <Project source={bookke} title={"Bøokké"} link={"https://writeguyservices.herokuapp.com/"} />
                        <Project source={bandaid} title={"Band Aid"} link={"http://www.martysartscontinuum.com"} />
                        <Project source={cheese} title={"Shuffled Cheese"} link={"https://writeguyservices.herokuapp.com/"} />
                        <Project source={tm3k} title={"Taskmaster3000"} link={"http://www.martysartscontinuum.com"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;