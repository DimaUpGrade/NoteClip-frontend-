<template>
    <div id="column_list_main">
        <!-- <ColumnItem v-for="column in board" v-bind:column="column" @asd="toParent()" /> -->
        <ColumnItem v-for="column in sortedBoard" v-bind:column="column" @asd="toParent()"
            @increment_counter_columns="columns_counter_increment" @increment_counter_to_zero="columns_counter_to_zero()"/>
        <div class="div_add_column">
            <h3 id="new_column_h3">Новый столбец</h3>
            <input type="text" id="new_column_input">
            <div @click="add_new_column()" id="new_column_button">
                <p>Добавить</p>
            </div>
        </div>
    </div>
</template>

<script>
import ColumnItem from '@/components/ColumnItem.vue'
import { add_column } from '../network';

var columns_counter = 0;


export default {
    props: ['board'],

    methods: {
        toParent() {
            this.$emit("asd")
        },

        columns_counter_to_zero() {
            columns_counter = 0
        },

        columns_counter_increment(number) {
            columns_counter = number
            // alert(columns_counter)
        },

        add_new_column() {
            let column_title_doc = document.getElementById('new_column_input')
            // let column_title = column_title_doc.value
            let number = columns_counter + 1
            
            if (column_title_doc.value != "") {
                add_column(this.id_board, column_title_doc.value, number)
                columns_counter = 0
                this.$emit("asd")
            }
        }
    },

    computed: {
        sortedBoard: function () {
            var _ = require('lodash');
            return _.orderBy(this.board, 'number')

            // let sorted_board = this.board
            // alert(sorted_board)
            // return sorted_board.sort((a, b) => a.number > b.number ? 1 : -1);
        }
    },

    created() {
        this.id_board = this.$route.params.id;
    },

    components: {
        ColumnItem
    }
}

</script>

<style scoped>
div {
    display: inline-block;
    margin: 0rem 1rem;
}

#new_column_h3 {
    width: 100%;
    text-align: center;
    margin: 10px auto 10px auto;
}

#column_list_main {
    display: flex;
    padding: 50px;
    min-width: 100vw;
    text-align: start;
    align-items: flex-start;

}

#new_column_input {
    width: 100%;
    height: 5%;
}

#new_column_button {
    margin: 0 0;
    width: 100%;
    margin-top: 5px;
    padding: auto;
    text-align: center;
    color: var(--text);
    background-color: var(--primary);
    border-radius: 3px;
    border: none;
    cursor: pointer;
}

.div_add_column {
    height: 600px;
    /* background-color: var(--primary); */
    width: 300px;
    padding: 30px;
    padding-right: calc(0vh + scrollbarWidth);
    /* border-radius: 10px; */
    border: 3px dotted var(--primary);

    /* height: 15vh;
    width: 25vh;
    padding: 3vh;
    border: 3px dotted var(--primary); */

}

.h2_column_title {
    font-size: 2.0vh;
    /* text-decoration: underline; */
    text-align: center;
    color: white;
    -webkit-text-stroke: 0.14vh var(--text);

}
</style>