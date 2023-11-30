<template>
    <!-- <header>
        asd
    </header> -->
    <BoardHeader v-bind:title="title" />
    <div id="main_div_board">

        <ColumnList v-bind:board="board" />
    </div>
    <!-- {{ board.id }} -->
</template>

<script>

import BoardHeader from '@/components/BoardHeader.vue'
import ColumnList from '@/components/ColumnList.vue'

import { API_URL, axios } from '../network';

export default {
    data() {
        return {
            board: {},
            title: "title",
        }
    },
    methods: {

    },
    components: {
        ColumnList, BoardHeader
    },
    created() {
        const id = this.$route.params.id;
        axios
            .get(API_URL + '/api/boards/' + id, {
                headers: {
                    'X-CSRFToken': Cookies.get('csrftoken')
                }
            })
            .then(response => { this.board = response.data.columns, this.title = response.data.title });
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
    padding: 1rem 0;
    margin: 2em auto;
    justify-content: center;
    height: 86vh;
    width: 95vw;
    border-radius: 10px;
    background-color: #88a2c2;
    ;
}
</style>