<template>
    <div class="div_column" v-bind:id="column.id">
        <h2 @mouseenter="title_column_is_hover(column.id)" @mouseleave="title_column_is_over(column.id)"
            class="h2_column_title">
            <div class="control_pannel_column">
                <input type="button" @click="edit_column_init(column.id)" class="edit_column"
                    v-bind:id="'edit_column_button_' + column.id" value="✎">
                <input type="button" @click="delete_column(column.id)" class="remove_column"
                    v-bind:id="'remove_button_' + column.id" value="X">
            </div>


            {{ column.title }}
        </h2>
        <TaskList @asd="toParent()" v-bind:id_column="column.id" v-bind:tasks="tasks" />
    </div>
</template>

<script>

// v-bind:id="'remove_button_' + column.id"

import TaskList from '@/components/TaskList.vue'
import { remove_column, edit_column } from '../network';

export default {
    data() {
        return {
            //wrong
            // title_is_hover: false,
            tasks: this.column.tasks
        }
    },
    props: {
        column: {
            type: Object,
            required: true
        },
    },
    methods: {
        toParent() {
            this.$emit("asd")
        },
        delete_column(id_column) {
            remove_column(id_column)
            this.$emit("increment_counter_to_zero")
            this.$emit("asd")
        },
        title_column_is_hover: function (column) {
            const remove_button = document.getElementById('remove_button_' + column)
            const edit_button = document.getElementById('edit_column_button_' + column)
            remove_button.style.visibility = "visible"
            edit_button.style.visibility = "visible"
        },
        title_column_is_over: function (column) {
            const remove_button = document.getElementById('remove_button_' + column)
            const edit_button = document.getElementById('edit_column_button_' + column)
            remove_button.style.visibility = "hidden"
            edit_button.style.visibility = "hidden"
        },
        edit_column_init(id_column) {
            // alert('Типа вызов метода эдита колумна')
            function rerender(obj) {
                obj.$emit("increment_counter_to_zero")
                obj.$emit("asd")
            }

            let context_ = this

            xdialog.open({
                title: 'Редактирование столбца',
                body: '\
                        <style>\
                            .demo1-mb-1 { margin-bottom: 1em; }\
                            .demo1-row { text-align: center; }\
                            .demo1-row label { min-width: 6em; display: inline-block; text-align: left; margin: 0 auto 10px auto; }\
                            .demo1-row input { padding: 0.3em; outline: none; min-width: 12em; }\
                            .demo1-validated input { border: #9ca5dbcd 2px solid; }\
                            .demo1-validated input:invalid { border: red 2px solid; }\
                            #ok button {background-color: #9ca5dbcd}\
                        </style>\
                        <div id="demo1-form" style="display: inline-block">\
                            <div class="demo1-row demo1-mb-1"><label for="new_number_column">Новый номер столбца:</label><input type="text" id="new_number_column" required></div>\
                        </div>',
                buttons: { ok: 'Изменить', cancel: 'Отмена' },
                effect: '3d_rotate_bottom',
                style: 'width: 25em;',
                onok: function () {
                    document.getElementById('demo1-form').classList.add('demo1-validated');

                    let new_number_column = document.getElementById('new_number_column').value;
                    
                    if (!new_number_column) {
                        return false;
                    }

                    edit_column(id_column, new_number_column)
                    rerender(context_)
                }
            });

            // this.$emit("increment_counter_to_zero")
            // this.$emit("asd")
        }
    },

    created() {
        // const id = this.$route.params.id;
        // this.tasks = board_1.columns
    },

    mounted() {
        this.$emit("increment_counter_columns", this.column.number)
    },


    components: { TaskList }
}
</script>

<style scoped>
.div_column {
    height: 600px;
    /* background-color: var(--primary); */
    width: 300px;
    padding: 30px;
    background-color: #9ca5dbcd;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding-right: calc(0vh + scrollbarWidth);
    border-radius: 10px;
    /* border: 3px dotted var(--primary); */


}

.h2_column_title {
    font-size: 24px;
    /* text-decoration: underline; */
    text-align: center;
    color: var(--primary);
    background-color: var(--text);
    border-radius: 0.3vw;
    padding: 0px 0 20px 0;
    margin-bottom: 0;
    /* -webkit-text-stroke: 1.2px var(--text); */
}

.control_pannel_column {
    display: inline;
    width: 100%;
    height: 50px;
}

.edit_column {
    display: inline;
    visibility: hidden;
    height: 20px;
    width: 20px;
    margin: 0 0 0 160px;
    cursor: pointer;
    border: 0.2px solid var(--background);
    box-shadow: 0px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-size: 11px;
    line-height: 11px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: white;
}

.remove_column {
    /* background-color: red; */
    display: inline;
    visibility: hidden;
    margin: 0 0 0 6px;
    height: 20px;
    width: 20px;
    cursor: pointer;
    font-weight: bold;
    color: rgb(249, 132, 132);
    border: 0.2px solid var(--background);
    /* border: none; */
    box-shadow: 0px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-size: 11px;
    line-height: 11px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: white;
}
</style>