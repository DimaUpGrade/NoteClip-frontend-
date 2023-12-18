<template>
    <div @dragstart="onDragStart($event, task)" class="task_div" v-bind:id="task.id" draggable="true">
        <p class="task_p">{{ task.title }}</p>
        <div class="control_buttons" style="display: inline-flex;">
            <button class="edit_button">✎</button>
            <button @click="delete_task(task.id)" class="delete_button">X</button>
            <!-- <input class="date_selector" type="date"> -->
        </div>        
    </div>
</template>

<script>

import { remove_task } from '../network';

export default {
    data () {

    },
    props: {
        task: {
            type: Object,
            required: true
        }
    },

    methods: {
        delete_task(id_task) {
            remove_task(id_task)
            let task_div = document.getElementById(id_task)
            task_div.style.display = 'none';
        }
    },

    setup () {
        function onDragStart(e, task) {
            e.dataTransfer.dropEffect = 'move'
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.setData('task_id', task.id)
        }

        return {
            onDragStart
        }
    }
}

</script>

<style scoped>

.task_div {
    margin-top: 20px;
    background-color: var(--primary);
    border-radius: 0.3vw;
}

.task_p {
    font-size: 1.5vh;
    padding: 1vh 1vw;
    max-width: 230px;
    word-break: break-all;
}

.control_buttons {
    width: 100%;
}

button {
    border: 0.1vw solid black;
    font-size: 1.1vh;
    width: 20px;
    height: 20px;
    
}

.edit_button {
    margin: 0 0 5% 75%;
}

.delete_button {
    margin: 0 0 0 5px;
}

.new_task_title {
    width: 90%;
}

/* .date_selector {
    width: 4vw;
    height: 2vh;
    border-radius: 0px;
    border: 0.1vw solid black;
    font-size: 1.1vh;
    margin: 0 0 0 0.2vw;
} */

</style>