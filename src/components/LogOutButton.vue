<template>
    <div class="logout_button" @click="logout">
        <button>Выйти из аккаунта</button>
    </div>
</template>

<script>
import router from '../router';

import { API_URL, axios } from '../network';

export default {
    data() {
        return {

        }
    },
    methods: {
        logout() {
            axios.post(API_URL + '/api/logout/', {}, {
                headers: {
                    // 'X-CSRFToken': Cookies.get('csrftoken')
                    'Authorization': 'Token ' + localStorage.getItem("token")
                }
            })
                .then((response) => {
                    alert("Успешный выход!");
                    localStorage.removeItem("token");
                    // localStorage.setItem("token", null);
                    router.push({ path: '/' });

                })
                .catch((error) => {
                    if (error.response.status) {
                        router.push({ path: '/' });
                        // alert("Ошибка!");
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