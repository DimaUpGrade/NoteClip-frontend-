

<template>
    <div id="main_div">
        <h1>Registration</h1>
        <input type="text" id="login">
        <input type="password" id="password">
        <div>
            <button @click="count_plus" id="one_button">Плюс</button>
            <button @click="count_minus" id="two_button">Минус</button>
            <button @click="in_function" id="in">Сохранить</button>
            <button @click="out_function" id="out">Вывести</button>
        </div>
        <button @click="goToTest">Перейти на тест</button>
        
        <p>{{ count }}</p>
    </div>

    
</template>

<script>

// const getID = (id) => {
//     return document.getElementById(id);
// }

import { logicalExpression } from '@babel/types';
import router from '../router';


export default {
    data() {
        return{
            count: 1,
            result_of_button: "",
        }
    },
    methods: {
        in_function () {
            localStorage.setItem('count', this.count)
        },

        out_function () {
            this.count = localStorage.getItem('count')
        },

        count_plus () {
            this.count++
        },

        count_minus () {
            this.count--
        },

        goToTest() {
            // if (login.value == "penis") {
            //     this.result_of_button = "pennsnsassa";
            // }

            // if (login.value) {
            //     this.result_of_button = login.value;
                
            // }
            // else {
            //     this.result_of_button = "Нет данных!";
            // }
            

            // КНОПОЧКА ПЕРЕНАПРАВЛЯЕТ!!!!!!!!!!

            router.replace({ path: '/testscreen'})
            
        }
    }
}

</script>

<style></style>