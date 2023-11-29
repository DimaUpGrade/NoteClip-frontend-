<template>
    <div class="logout_button" @click="logout">
        <button>Выйти из аккаунта</button>
    </div>
</template>

<script>
import router from '../router';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrfToken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

// const API = axios.create({
//     baseURL: `http://127.0.0.1:10000/api/`,
//     headers: {
//         Accept: "application/json",
//         "Content-type": "application/json"
//     },
//     timeout: 10000,
//     withCredentials: true
// });

export default {
    data() {
        return {

        }
    },
    methods: {
        logout() {
            axios.post('http://127.0.0.1:10000/api/logout/', {}, {headers:{
                'X-CSRFToken':Cookies.get('csrftoken')}})
                .then((response) => {
                    alert("Успешный выход!");
                    router.push({ path: '/' })

                })
                .catch((error) => {
                    if (error.response.status) {
                        alert("Пизда");
                    }
                });

        }
    }
}
</script>

<style scoped>
.logout_button {
    width: 10vw;
    height: 3vh;
}
</style>