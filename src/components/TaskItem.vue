<template>
    <div class="task_div" 
        @dragstart="onDragStart($event, task)"  
        v-bind:id="task.id" 
        @mouseenter="task_hover(task.id)"
        @mouseleave="task_leave(task.id)" 
        draggable="true">
        <p class="task_p" v-bind:id="'title_task_' + task.id">{{ task.title }}</p>
        <textarea v-bind:id="'new_title_task_' + task.id" class="edit_task_textarea" cols="30" rows="3" @focusout="end_edit_task(task.id)"></textarea>
        <div class="control_buttons" v-bind:id="'control_buttons_' + task.id" style="display: inline-flex;">
            <button @click="init_edit_task(task.id, task.title)" class="edit_button">✎</button>
            <button @click="delete_task(task.id)" class="delete_button">X</button>
            <!-- <input class="date_selector" type="date"> -->
        </div>
    </div>
</template>

<script>

import { remove_task, edit_task } from '../network';

export default {
    data() {

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
        },
        task_hover: function (id_task) {
            const button = document.getElementById('control_buttons_' + id_task)
            button.style.visibility = "visible"
        },
        task_leave: function (id_task) {
            const button = document.getElementById('control_buttons_' + id_task)
            button.style.visibility = "hidden"
        },
        init_edit_task(id_task, current_title) {
            const task_title = document.getElementById('title_task_' + id_task)
            const new_title_task = document.getElementById('new_title_task_' + id_task)
            const control_pannel = document.getElementById('control_buttons_' + id_task)
            control_pannel.style.display = 'none'
            task_title.style.display = 'none'
            new_title_task.style.display = 'block'
            new_title_task.innerText = task_title.innerHTML
            new_title_task.focus()
        },
        end_edit_task(id_task) {
            const task_title = document.getElementById('title_task_' + id_task)
            const new_title_task = document.getElementById('new_title_task_' + id_task)
            const control_pannel = document.getElementById('control_buttons_' + id_task)
            if (new_title_task.value != "") {
                edit_task(id_task, new_title_task.value)
                task_title.innerText = new_title_task.value
            }
            control_pannel.style.display = 'flex'
            task_title.style.display = 'block'
            new_title_task.style.display = 'none'

        }
    },

    setup() {
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
    min-height: 70px;
    margin-top: 20px;
    background-color: var(--primary);
    border-radius: 0.3vw;
}

.task_p {
    font-size: 1.5vh;
    padding: 1vh 1vw;
    max-width: 230px;
    word-break: break-all;
    word-break: keep-all;
}

.edit_task_textarea {
    display: none;
    width: 200px;
    align-self: center;
    /* height: 50px; */
    padding: 0 5px;
    resize: none;
    margin: 5px 1vw 0 1vw!important;
}

.control_buttons {
    visibility: hidden;
    width: 100%;
}

button {
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

.edit_button {
    margin: 0 0 5% 75%;
}

.delete_button {
    margin: 0 0 0 5px;
    font-weight: bold;
    color: rgb(249, 132, 132);
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