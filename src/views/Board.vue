<template>
    <!-- <header>
        asd
    </header> -->
    <div id="main_div_board">
        <ColumnList v-bind:board="board" />
    </div>
    <!-- {{ board.id }} -->
</template>

<script>
// убрать, когда будет через апи
import board_1 from '../test_data/board-1.json'
import board_2 from '../test_data/board-2.json'

import ColumnList from '@/components/ColumnList.vue'

export default {
    data() {
        return {
            board: {},
        }
    },
    methods: {

    },
    components: {
        ColumnList
    },
    created() {
        const id = this.$route.params.id;

        // Здесь будет вызываться апи к доске по id
        if (id == 1) {
            this.board = board_1.columns
        }
        else if (id == 2) {
            this.board = board_2.columns
        }
    }
}

</script>

<style scoped>

#main_div_board {
    display: flex;
    align-items: top;
    padding: 1rem 0;
    justify-content: center;
    height: 86vh;
    width: 95vw;
    border-radius: 10px;
    background-color: #88a2c2;;
}

</style>