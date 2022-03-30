import axios from "axios";

export default axios.create({
    baseURL: "https://d700afb2-85a3-4120-8029-51bda14c911b.mock.pstmn.io",
    headers: {
        "Content-type": "application/json"
    }
});