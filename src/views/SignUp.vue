<template>
    <div>
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
                <input type="text" id="password">
            </div>
            
        </div>
        <h2 id="alert_h1">Work in progress!</h2>
        <input type="button" @click="showMessage" id="submit-button" value="Зарегистрироваться">
        <router-link to="/login" tag="button">Уже зарегистрированы?</router-link>
        <router-view/>
    </div>
</template>

<script>
import { logicalExpression } from '@babel/types';
import router from '../router';

export default {
    data() {

    },
    methods: {
        showMessage () {
            alert_h1.style.display= "block";
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

input[type="text"] {
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



</style>