<template>
    
    <div class="task_list" @drop="onDrop($event, id_column)" @dragover.prevent @dragenter.prevent>
        <TaskItem v-for="task in tasks" v-bind:task="task" />
        <div class="new_task">
        <div v-bind:id="'column_new_task_' + id_column" class="column_new_task">
            <textarea v-bind:id="'title_new_task_' + id_column" class="column_new_task" rows="3"></textarea>
        </div>
        <div @click="adding_task(id_column)" class="task_div add_new_task">
            <p class="add_new_task">+</p>
        </div>
    </div>
    </div>
    
    
</template>

<script>

import TaskItem from '@/components/TaskItem.vue'
import { change_task_column, add_task } from '../network';
import { defineEmits, ref } from 'vue'
// import { id_cChange } from '../views/Board.vue'

export default {
    props: ["tasks", "id_column"],
    methods: {
        adding_task(id_column) {
            const textarea_id = 'title_new_task_' + id_column;
            let text = document.getElementById(textarea_id);
            if (text.value != "") {
                add_task(id_column, text.value)
                this.$emit("asd")
            }
        }
    },
    setup(props, context) {
        const emit = defineEmits(["asd"]);
        function onDrop(e, id_column) {
            const task = e.dataTransfer.getData('task_id');
            // alert('column: ' + id_column + ' task: ' + task);
            change_task_column(id_column, task);
            context.emit("asd");
        }

        return {
            onDrop
        }
    },

    components: { TaskItem }

}

</script>

<style scoped>
.task_list {
    height: 50vh;
    margin-top: 5px;
    /* background-color: blueviolet; */
    font-size: 15px;
    overflow: auto;
    padding-right: 10px;
    width: 250px;
}

.task_div {
    margin-top: 20px;
    background-color: var(--primary);
    border-radius: 0.3vw;
}

.add_new_task {
    margin-top: 5px;
    padding: auto;
    text-align: center;
    cursor: pointer;
}

.column_new_task div {
    /* display: none; */
    border-radius: 0.3vw;
    background-color: aqua;
    width: 90%;
    height: 20%;
}

.column_new_task textarea {
    padding: 0;
    width: 100%;
    height: 50px;
    margin: auto;
    text-align: start;
    vertical-align: top;
    resize: none;
}

.new_task {
    margin-top: 20px;
}
</style>