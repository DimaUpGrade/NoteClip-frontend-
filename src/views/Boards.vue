<template>
    <LogOutButton />
    <div id="Boards">
        <BoardList 
            v-bind:boards="boards"
        />
    </div>
</template>

<script>

import LogOutButton from '@/components/LogOutButton.vue';
import BoardList from '@/components/BoardList.vue'
// import user_boards from '../test_data/user-boards.json'
import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrfToken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
// import { response } from 'express';



export default {
    name: 'Boards',
    mounted() {
        axios
            .get('http://127.0.0.1:10000/api/user-boards/')
            .then(response => this.boards = response.data);
    },
    
    data () {
        return {
            boards: []
        }
    },
    components: {
        BoardList, LogOutButton
    }    
}

</script>

<style>

</style>