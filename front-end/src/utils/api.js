import axios from "axios";

export default {
    //------------------------------------------------------- Contact Form:
    sendMessage: function (message) {
        return axios.post("/message/", message).catch(err => console.log(err));
    }
};