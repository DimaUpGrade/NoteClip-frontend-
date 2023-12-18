<template>
    <div class="wrapper">
        <h1>Страница входа</h1>
        <div class="data-block">
            <div class="data-block-elements">
                <p>Введите логин: </p>
                <p>Введите пароль: </p>
            </div>
            <div class="data-block-elements">
                <input type="text" id="login">
                <input type="password" id="password">
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
import { API_URL, axios, login_account } from '../network';
import { tokenIsSet } from '../validation';
import router from '../router';

export default {
    data() {
        return {
            status: ""
        };
    },
    methods: {
        loginAccount() {
            login_account(login.value, password.value)
        }
    },
    mounted() {
        if (tokenIsSet()) {
            router.replace({ path: '/board-list/' });
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

.wrapper {
    margin: 20vh auto;
}

</style>