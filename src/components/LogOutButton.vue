<template>
    <div class="logout_button" @click="logout">
        <button>Выйти из аккаунта</button>
    </div>
</template>

<script>
import router from '../router';

import {API_URL, axios} from '../network';

export default {
    data() {
        return {

        }
    },
    methods: {
        logout() {
            axios.post(API_URL + '/api/logout/', {}, {headers:{
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