import React, { useState } from "react";
import api from "../../utils/api";
import "./style.css";

function Footer() {
    const [name, box1] = useState("")
    const [email, box2] = useState("")
    const [content, box3] = useState("")

    const message = () => {
        api.sendMessage({ name, email, content });
    }

    return (
        <footer>
            <div id="footerContainer" className="freight">
                <div className="intermodal">
                    <div className="messageContainer">
                        <form action="">
                            <label for="name">name</label>
                            <input className="contactInput trans" type="text" id="name" name="name" onChange={q => box1(q.target.value)} />
                            <br />
                            <label for="email">email</label>
                            <input className="contactInput trans" type="text" id="email" name="email" onChange={w => box2(w.target.value)} />
                            <br />
                            <label for="message">message</label>
                            <textarea className="contactInput trans" id="message" name="messagew" rows="4" onChange={e => box3(e.target.value)}></textarea>
                            <div className="clearfix">
                                <div className="button2 trans buttonContainer" onClick={message}>SEND</div>
                            </div>
                            <br /><br /><br />
                        </form>
                    </div>
                    <div id="certbox">
                        <iframe frameborder="0" scrolling="no" src="https://umn.credly.com/embed.html#/?member_badge_id=23102523" width="200" height="230"></iframe>
                        <div className="clearfix"><br /></div>
                        Certified Web Developer from the University of Minnesota
                    </div>
                    <div id="infobox">
                        <p>John Ochs</p>
                        <p>Full Stack Web Developer</p>
                        <p>952 • 215 • 7440</p>
                        <br /><br /><br /><br /><br />
                    </div>
                </div>
            </div>
            <div id="footerContainer2" className="freight">
                <div className="intermodal">
                    <h6>© John Ochs 2020</h6>
                </div>
                <div className="clearfix"><br /></div>
            </div>
        </footer >
    )
}

export default Footer;