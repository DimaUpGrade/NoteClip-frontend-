<template>
    <BoardHeader v-bind:title="title" />
    <div id="main_div_board">
        <ColumnList @asd="rerender_content()" v-bind:board="board" :key="board" />
    </div>
</template>

<script>

import BoardHeader from '@/components/BoardHeader.vue'
import ColumnList from '@/components/ColumnList.vue'
import { API_URL, axios, get_data_board } from '../network';

export default {
    data() {
        return {
            board: {},
            title: "title",
            id_table: {}
        }
    },
    methods: {
        rerender_content() {
            setTimeout(async () => { get_data_board(this.id_table).then(result => this.board = result) }, 300);
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
    padding: 10px;
    margin: 2em auto;
    justify-content: center;
    height: 86vh;
    width: 95vw;
    border-radius: 10px;
    background-color: var(--secondary);
    overflow: auto;
    -webkit-box-shadow: -3px 3px 8px 0px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: -3px 3px 8px 0px rgba(34, 60, 80, 0.2) inset;
    box-shadow: -3px 3px 8px 0px rgba(34, 60, 80, 0.2) inset;
}

::-webkit-scrollbar-track { 
    background-color: transparent;
    border: none;
} 

</style>