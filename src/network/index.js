import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrfToken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const API_URL = "http://127.0.0.1:10000";

export { API_URL, axios }