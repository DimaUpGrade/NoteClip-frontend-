<template>
    <!-- <header>
        asd
    </header> -->
    <BoardHeader v-bind:title="title" />
    <div id="main_div_board">
        <ColumnList @asd="testAlert()" v-bind:board="board" :key="board"/>
    </div>
    <!-- {{ board.id }} -->
</template>

<script>

import BoardHeader from '@/components/BoardHeader.vue'
import ColumnList from '@/components/ColumnList.vue'
// import { onMounted, ref, watch } from 'vue'

import { API_URL, axios, get_data_board } from '../network';

export default {
    setup() {

    },

    data() {
        return {
            board: {},
            title: "title",
            id_table: {}
        }
    },
    methods: {
        testAlert() {
            // get_data_board(this.id_table).then(result => this.board = result)
            get_data_board(this.id_table).then(result => this.board = result)
            get_data_board(this.id_table).then(result => this.board = result)
        }
    },
    components: {
        ColumnList, BoardHeader
    },
    created() {
        const id = this.$route.params.id;
        this.id_table = id;

        axios
            .get(API_URL + '/api/boards/' + id, {
                headers: {
                    // 'X-CSRFToken': Cookies.get('csrftoken')
                }
            })
            .then(response => { this.title = response.data.title });


        
        get_data_board(this.id_table).then(result => this.board = result)
    }
}

</script>

<style scoped>
body {
    padding: auto 0;
}


#main_div_board {
    display: flex;
    align-items: top;
    padding: 10px 100px;
    margin: 2em auto;
    justify-content: center;
    height: 86vh;
    width: 95vw;
    border-radius: 10px;
    background-color: #88a2c2;
    overflow: auto;
}
</style>