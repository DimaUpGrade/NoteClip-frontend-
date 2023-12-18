<template>
    <div class="wrapper">
        <h1>Страница регистрации</h1>

        <div class="data-block">
            <div class="data-block-elements">
                <p>Введите email: </p>
                <p>Введите логин: </p>
                <p>Введите пароль: </p>
            </div>
            <div class="data-block-elements">
                <input type="text" id="email">
                <input type="text" id="login">
                <input type="password" id="password">
            </div>

        </div>
        <h2 id="alert_h1">Work in progress!</h2>
        <input type="button" @click="tryRegister" id="submit-button" value="Зарегистрироваться">
        <router-link to="/login" tag="button">Уже зарегистрированы?</router-link>
        <router-view />
    </div>
</template>

<script>
import { API_URL, axios, login_account } from '../network';
import { tokenIsSet } from '../validation';
import router from '../router';

export default {
    data() {

    },
    methods: {
        tryRegister() {
            let email_ = email.value;
            let login_ = login.value;
            let password_ = password.value;

            const regExp_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (email_ != "" && login_ != "" && password_ != "") {
                if (email_.match(regExp_email)) {
                    // alert('email norm');
                    // тут функцию проверки логина на занятость надо с вызовом апи
                    //

                    axios.post(API_URL + '/api/register/', {
                        username: login_,
                        password: password_,
                        email: email_
                    })
                        .then((response) => {
                            login_account(login_, password_)
                        })
                        .catch((error) => {
                            if (error.response.status == '500') {
                                this.status = "Неверные данные регистрации!";
                            }
                            console.log(error);
                        });
                }
                else {
                    alert("Убедитесь в правильности написания email!");
                }
            }
            else {
                alert("Не все поля заполнены!");
            }


            // alert_h1.style.display= "block";
        }
    },

    mounted() {
        if (tokenIsSet()) {
            router.replace({ path: '/board-list/' });
        }
    }
}

</script>

<style>
body {
    color: var(--text);
}

h1 {
    margin-bottom: 10vh;
}

#alert_h1 {
    display: none;
    color: red;
}

.data-block {
    display: inline-flex;
}

p {
    color: var(--text);
    align-content: center;
}

input {
    display: block;
}

#submit-button {
    margin: 10vh auto 50px auto;
    width: 200px;
    height: 50px;
    color: var(--text);
    background-color: var(--primary);
    border: none;
    border-radius: 10px;
}

#submit-button:hover {
    background-color: var(--accent);
}

#submit-button:active {
    background-color: #88a2c2;
}

input[type="text"],
input[type="password"] {
    border-radius: 5px;
    border: 1px solid var(--text);
}

.data-block-elements {
    text-align: start;
    margin-right: 1vw;
}

.data-block-elements input {
    margin-bottom: 1vh;
    padding: 7px;

}

.data-block-elements p {
    margin-bottom: 1vh;
    padding: 5px 7px 7px 7px;
}

.wrapper {
    margin: 20vh auto;
}

</style>