import axios from 'axios';

const url = "http://jsonplaceholder.typicode.com/users";

const errHandler = err => {
    console.error(err.response.data);
    throw err.response.data;
};

export default {
    signup(userInfo) {
        return axios.post(url, userInfo)
            .then(res => {
                localStorage.setItem("userInfo", JSON.stringify(res.data));
                return res.data;
            })
            .catch(errHandler);
    },
    getUserInfo(){
        const userInfo = localStorage.getItem("userInfo");
        if(userInfo){
            return JSON.parse(userInfo);
        }
    }
};