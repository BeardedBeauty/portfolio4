import React from "react";
import Project from "../../components/Project";
import Footer from "../../components/Footer"
import "./style.css";
import bgimg from "../../assets/bg.jpg";
import me from "../../assets/tree2.png";
import resume from "../../assets/resume 2021 dev.pdf";
import bookke from "../../assets/bookke.png";
import bandaid from "../../assets/bandaid.png";
import cheese from "../../assets/cheese.png";
import mac from "../../assets/mac.png";
import tm3k from "../../assets/tm3k.png";
import wgs from "../../assets/wgs.png";
import facepalm from "../../assets/facepalm.png";
import demo from "../../assets/SHdemo.png";

function Home(props) {
    return (
        <>
            {props.top}
            <div className="bacgroundcontainer">
                {/* <img src={bgimg} id="defaultbackground" /> */}
                <img src="https://images3.alphacoders.com/773/773135.jpg" id="defaultbackground" />
            </div>
            <div className="loco">
                <div className="header">
                    <p id="headerTitle">{"John Ochs"}</p>
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
                    {props.portfolio}
                    <p className="miniTitle">{"Portfolio"}</p>
                </div>
                <div id="portfolio" className="freight">
                    <div className="intermodal">
                        <div className="subMiniTitle">
                            <p>{`Professional Projects`}</p>
                        </div>
                        <Project source={wgs} title={"Write Guy Services"} link={"https://writeguyservices.herokuapp.com/"} />
                        <Project source={mac} title={"Marty's Arts Continuum"} link={"http://www.martysartscontinuum.com"} />
                        <Project source={demo} title={"Swanson Health Homepage Demo"} link={"https://determined-noether-6919c6.netlify.app"} />
                        <div className="clearfix"></div>
                        <div className="subMiniTitle">
                            <p>{`Personal Projects`}</p>
                        </div>
                        {/* <Project source={mac} title={"Sezzle Calc Chat App"} link={"http://www.martysartscontinuum.com"} /> */}
                        <Project source={bookke} title={"Bøokké"} link={"https://bookkemark.herokuapp.com"} gitlink={"https://github.com/BeardedBeauty/BookFinder"} />
                        <Project source={bandaid} title={"Band Aid"} link={"https://ryanholt22.github.io/Band-Aid/"} gitlink={"https://github.com/ryanholt22/Band-Aid"} />
                        <Project source={cheese} title={"Shuffled Cheese"} link={"https://cheese-click.herokuapp.com/"} gitlink={"https://github.com/BeardedBeauty/Shuffleables"} />
                        <Project source={tm3k} title={"Taskmaster3000"} link={"https://taskmaster3000.herokuapp.com"} gitlink={"https://github.com/BeardedBeauty/Boards-of-Canada"} />
                        <Project source={facepalm} title={"FacePalm"} link={"https://face--palm.herokuapp.com"} gitlink={"https://github.com/BeardedBeauty/FacePalm"} />
                    </div>
                </div>
                <Footer scroll={props.contact} />
            </div>
        </>
    )
}

export default Home;