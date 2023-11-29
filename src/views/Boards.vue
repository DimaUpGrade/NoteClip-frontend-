<template>
    <div id="Boards">
        <BoardList 
            v-bind:boards="boards"
        />
    </div>
</template>

<script>

import BoardList from '@/components/BoardList.vue'
// import user_boards from '../test_data/user-boards.json'
import axios from 'axios';
// import { response } from 'express';



export default {
    name: 'Boards',
    mounted() {
        axios
            .get('http://localhost:10000/api/user-boards/')
            .then(response => this.boards = response.data);
    },
    
    data () {
        return {
            boards: []
        }
    },
    components: {
        BoardList
    }    
}

</script>

<style>

</style>