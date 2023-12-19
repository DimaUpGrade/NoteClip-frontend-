<template>
    <div class="wrapper_board_list">
        <BoardItem v-for="board in boards" v-bind:board="board" />
        <div @click="open_form()" class="new_board" id="new_form_button">
            <h1 id="h1_new_board">+</h1>
        </div>
        <div class="new_board" id="new_board_form">
            <input id="title_field" type="text" placeholder="Название доски">
            <textarea name="description_field" id="description_field" cols="25"
                rows="3" placeholder="Описание доски"></textarea>
            <input @click="create_board()" type="button" id="create_board_button" value="Создать">
        </div>
    </div>
</template>

<script>
import BoardItem from '@/components/BoardItem.vue'
import { add_board } from '../network'

export default {
    props: ['boards'],
    methods: {
        open_form() {
            const form = document.getElementById('new_board_form')
            const button = document.getElementById('new_form_button')
            form.style.display = 'flex'
            button.style.display = 'none'
        },
        create_board () {
            const title = document.getElementById('title_field').value
            const description = document.getElementById('description_field').value

            if (title != '' && description != '') {
                add_board(title, description)
                this.$emit("refresh_list")
            }
            else {
                alert("Не заполнены обязательные поля!")
            }
        }
    },
    components: {
        BoardItem
    }
}
</script>

<style scoped>
div {
    display: flex;
    padding: 2rem;
    margin: 2rem;
}

.wrapper_board_list {
    display: inline-flex;    
    width: calc(100vw - scrollbarWidth);
    height: 60vh;
}

#create_board_button {
    width: 80%;
}

#title_field {
    border-radius: 0px;
    width: 80%;
}

#h1_new_board {
    font-size: 48px;
    height: 100%;
    line-height: 75px;
    width: 100%;
    margin: 0 0;
    padding: 0 0;
    color: var(--secondary);
    vertical-align: middle;
}

#description_field {
    resize: none;
    width: 80%;
}

#new_board_form {
    display: none;
    padding: 1rem;
    text-align: start;
}

#new_board_form > * {
    margin: auto auto;
}

.new_board {
    display: flex;
    flex-direction: column;
    vertical-align: middle;
    min-width: 320px;
    width: 320px;
    height: 150px;
    border: 2px dotted var(--secondary);
    color: var(--text);
    align-items: flex-start;
    text-align: center;
    cursor: pointer;
}
</style>