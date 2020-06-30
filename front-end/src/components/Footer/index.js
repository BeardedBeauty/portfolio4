import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer>
            <div id="footerContainer" className="freight">
                <div className="intermodal">
                    <form action="/action_page.php">
                        <label for="fname">First name:</label>
                        <input type="text" id="fname" name="fname" value="John" />
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" value="Doe" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </footer >
    )
}

export default Footer;