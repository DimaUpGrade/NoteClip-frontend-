<template>
    <div class="logout_button" @click="logout">
        <p id="logout_p">
            Выйти из аккаунта
        </p>
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
                    // alert("Успешный выход!");
                    localStorage.removeItem("token");
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
    width: 100%;
    height: 30%;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    cursor: pointer;
}

#logout_p {
    color: var(--secondary) !important;
    text-align: start;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    color: var(--accent);
    text-decoration: underline;
    width: 100%;
    height: 100%;
}
</style>