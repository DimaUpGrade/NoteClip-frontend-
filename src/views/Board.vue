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
// убрать, когда будет через апи
import board_1 from '../test_data/board-1.json'
import board_2 from '../test_data/board-2.json'
import BoardHeader from '@/components/BoardHeader.vue'
import ColumnList from '@/components/ColumnList.vue'

export default {
    data() {
        return {
            board: {},
            title: "penis",
        }
    },
    methods: {

    },
    components: {
        ColumnList, BoardHeader
    },
    created() {
        const id = this.$route.params.id;

        // Здесь будет вызываться апи к доске по id
        if (id == 1) {
            this.title = board_1.title
            this.board = board_1.columns
        }
        else if (id == 2) {
            this.title = board_2.title
            this.board = board_2.columns
        }
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
    background-color: #88a2c2;;
}

</style>