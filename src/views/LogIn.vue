<template>
    <div>
        <h1>Страница входа</h1>
        <div class="data-block">
            <div class="data-block-elements">
                <p>Введите логин: </p>
                <p>Введите пароль: </p>
            </div>
            <div class="data-block-elements">
                <input type="text" id="login">
                <input type="text" id="password">
            </div>


        </div>

        <div>
            <h2 id="status_h2">{{ status }}</h2>
        </div>

        <input type="button" id="submit-button" @click="loginAccount" value="Войти">
        <router-link to="/registration" tag="button">Нет аккаунта? Зарегистрируйтесь прямо сейчас!</router-link>
        <router-view />
    </div>
</template>

<script>
import { logicalExpression } from '@babel/types';
import router from '../router';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrfToken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;


export default {
    data() {
        return {
            status: ""
        };
    },
    methods: {
        loginAccount() {
            // if (login.value == "user" & (password.value == "pass")) {
            //     router.push({ path: '/board-list'})
            // }
            // else {
            //     alert("Неверные данные авторизации!")
            // }
            axios.post('http://127.0.0.1:10000/api/login/', {
                username: login.value,
                password: password.value
            })
                .then((response) => {
                    // alert(response);
                    // alert(login.value);
                    // alert(password.value);
                    // alert(response.data.username);
                    router.push({ path: '/board-list' })

                })
                .catch((error) => {
                    if (error.response.status == '500') {
                        this.status = "Неверные данные авторизации!"; 
                    }
                    // alert(error.response.data);
                    console.log(error);
                });

        }
    }
}

</script>

<style scoped>
body {
    color: var(--text);
}

h1 {
    margin-bottom: 10vh;
}

#status_h2 {
    margin-top: 5vh;
    color: red;
}
</style>