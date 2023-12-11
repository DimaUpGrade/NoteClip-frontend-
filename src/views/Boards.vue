<template>
    <LogOutButton />
    <div id="Boards">
        <BoardList v-bind:boards="boards" />
    </div>
</template>

<script>

import LogOutButton from '@/components/LogOutButton.vue';
import BoardList from '@/components/BoardList.vue';
import { tokenIsSet } from '../validation';
import { API_URL, axios } from '../network';
import router from '../router';


export default {
    name: 'Boards',
    mounted() {
        if (tokenIsSet()) {
            axios
            .get(API_URL + '/api/user-boards/', {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem("token")
                }
            })
            .then(response => this.boards = response.data);
        }
        else {
            router.replace({ path: '/' });
        }
    },
    data() {
        return {
            boards: []
        }
    },
    components: {
        BoardList, LogOutButton
    }
}

</script>

<style></style>