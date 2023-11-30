<template>
    <LogOutButton />
    <div id="Boards">
        <BoardList v-bind:boards="boards" />
    </div>
</template>

<script>

import LogOutButton from '@/components/LogOutButton.vue';
import BoardList from '@/components/BoardList.vue'

import { API_URL, axios } from '../network';

export default {
    name: 'Boards',
    mounted() {
        axios
            .get(API_URL + '/api/user-boards/', {
                headers: {
                    'X-CSRFToken': Cookies.get('csrftoken')
                }
            })
            .then(response => this.boards = response.data);
    },
    data() {
        return {
            boards: []
        }
    },
    components: {
        BoardList, LogOutButton
    }
}

</script>

<style></style>