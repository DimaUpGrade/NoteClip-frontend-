import axios from 'axios';
// axios.defaults.xsrfCookieName = 'csrfToken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

const API_URL = "https://hoofeddragon417.pythonanywhere.com";
import router from '../router';

function login_account (username_, password_) {
    axios.post(API_URL + '/api/login/', {
        username: username_,
        password: password_
    })
        .then((response) => {
            localStorage.setItem("token", response.data['Token']);
            router.push({ path: '/board-list' });
        })
        .catch((error) => {
            
            console.log(error);
        });
}

export { API_URL, axios, login_account }