<template>
    <div id="column_list_main">
        <ColumnItem v-for="column in sortedBoard" v-bind:column="column" @asd="toParent()"
            @increment_counter_columns="columns_counter_increment" @increment_counter_to_zero="columns_counter_to_zero()" />
        <div id="init_add_column" @click="init_add_new_column()">
            <h1 id="h1_init_add_column">+</h1>
        </div>
        <div id="div_add_column" @focusout="add_div_is_not_focus()">
            <!-- <h3 id="new_column_h3">Новый столбец</h3> -->
            <input type="text" id="new_column_input" placeholder="Название нового столбца">
            <!-- <div @click="add_new_column()" id="new_column_button">
                <p>+</p>
            </div> -->
        </div>
        <div id="div_prikol"></div>
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
        },

        // add_new_column() {
        //     const column_title_doc = document.getElementById('new_column_input')
        //     let number = columns_counter + 1

        //     if (column_title_doc.value != "") {
        //         add_column(this.id_board, column_title_doc.value, number)
        //         columns_counter = 0
        //         this.$emit("asd")
        //     }
        // },

        init_add_new_column() {
            const init_div = document.getElementById('init_add_column')
            const add_div = document.getElementById('div_add_column')
            const input_new_column = document.getElementById('new_column_input')
            init_div.style.display = 'none'
            add_div.style.display = 'block'
            input_new_column.focus()
        },

        add_div_is_not_focus() {
            const column_title_doc = document.getElementById('new_column_input')
            let number = columns_counter + 1

            if (column_title_doc.value != "") {
                add_column(this.id_board, column_title_doc.value, number)
                columns_counter = 0
                this.$emit("asd")
            }

            const init_div = document.getElementById('init_add_column')
            const add_div = document.getElementById('div_add_column')
            init_div.style.display = 'flex'
            add_div.style.display = 'none'
        }
    },

    computed: {
        sortedBoard: function () {
            var _ = require('lodash')
            return _.orderBy(this.board, 'number')
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

#div_prikol {
    height: 600px;
    width: 30px;
    min-width: 30px;
}

#h1_init_add_column {
    font-size: 48px;
    height: 50px;
    line-height: 48px;
    width: 50px;
    margin: 0 0;
    padding: 0 0;
    color: #9ca5dbcd;
    vertical-align: middle;
}

#init_add_column {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--secondary);
    border: 2px dotted #9ca5dbcd;
    height: 600px;
    width: 300px;
    min-width: 300px;
    cursor: pointer;
}

#new_column_h3 {
    width: 100%;
    text-align: center;
    margin: 10px auto 10px auto;
}

#column_list_main {
    display: flex;
    padding: 50px 0;
    min-width: 70vw;
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
    height: 20px;
    margin-top: 5px;
    padding: auto;
    text-align: center;
    color: var(--text);
    background-color: var(--primary);
    border-radius: 3px;
    border: none;
    cursor: pointer;
}

#div_add_column {
    display: none;
    height: 600px;
    width: 300px;
    min-width: 300px;
    padding: 30px;
    background-color: var(--secondary);
    border: 2px dotted #9ca5dbcd;
    border-radius: 10px;
}

.h2_column_title {
    font-size: 2.0vh;
    text-align: center;
    color: white;
    -webkit-text-stroke: 0.14vh var(--text);
}
</style>