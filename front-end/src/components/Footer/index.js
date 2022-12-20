import React, { useState } from "react";
// import api from "../../utils/api";
import "./style.css";

function Footer(props) {
    // const [name, box1] = useState("");
    // const [email, box2] = useState("");
    // const [content, box3] = useState("");
    // const [bannerno, success] = useState(false);
    // const [banneryes, tryagain] = useState(false);

    // const message = () => {
    //     if (name && email && content) {
    //         api.sendMessage({ name, email, content });
    //         success(true);
    //         tryagain(false);
    //     }
    //     else {
    //         tryagain(true);
    //         success(false);
    //     };
    // };

    return (
        <footer>
            <div className="subtitle">
                {props.scroll}
                <p className="miniTitle">{"Contact"}</p>
            </div>
            <div className="subtitle">
                <div className="clearfix">
                    <div className="buttonRack">
                        <div className="buttonBrick">
                            <a href="mailto: john.w.ochs0@gmail.com">
                                <div className="button2 trans">email</div>
                            </a>
                        </div>
                        <div className="buttonBrick">
                            <a href="tel:+19522157440">
                                <div className="button2 trans">phone</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footerContainer" className="freight">
                <div className="intermodal">
                    {/* <div className="messageContainer">
                        {bannerno && <div className="banner success">EMAIL SENT</div>}
                        {banneryes && <div className="banner tryagain">Error, please try again</div>}
                        <br />
                        <form action="">
                            <label for="name">name</label>
                            <input className="contactInput trans" type="text" id="name" name="name" onChange={q => box1(q.target.value)} />
                            <br />
                            <label for="email">email</label>
                            <input className="contactInput trans" type="text" id="email" name="email" onChange={w => box2(w.target.value)} />
                            <br />
                            <label for="message">message</label>
                            <textarea className="contactInput trans" id="message" name="messagew" onChange={e => box3(e.target.value)}></textarea>
                            <div className="clearfix">
                                <div className="button2 trans buttonContainer" onClick={message}>SEND</div>
                            </div>
                            <br /><br /><br />
                        </form>
                    </div> */}
                    {/* <div id="certbox">
                        <iframe frameborder="0" scrolling="no" src="https://umn.credly.com/embed.html#/?member_badge_id=23102523" width="200" height="230"></iframe>
                        <div className="clearfix"><br /></div>
                        Certified Web Developer from the University of Minnesota
                        Fuck you U of M for giving me this shit certificate and the badge doesnt even work
                    </div> */}
                    <div id="infobox">
                        <p>John Ochs</p>
                        <p>Full Stack Web Developer</p>
                        <p>952 • 215 • 7440</p>
                        <br /><br /><br /><br /><br />
                    </div>
                </div>
            </div>
            <div id="footerContainer2" className="freight">
                <div className="intermodal">
                    <h6>© John Ochs 2022</h6>
                </div>
                <div className="clearfix"><br /></div>
            </div>
        </footer >
    )
}

export default Footer;