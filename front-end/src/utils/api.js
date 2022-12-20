import axios from "axios";
//this section is unused, because heroku is a turd, now is used as a static site
export default {
    //------------------------------------------------------- Contact Form:
    sendMessage: function (message) {
        return axios.post("/message/", message).catch(err => console.log(err));
    }
};