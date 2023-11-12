<template>
    <div id="Boards">
        <BoardList 
            v-bind:boards="boards"
        />
    </div>
</template>

<script>
import BoardList from '@/components/BoardList.vue'
import user_boards from '../test_data/user-boards.json'

export default {
    name: 'Boards',
    data () {
        return {
            boards: user_boards
        }
    },
    components: {
        BoardList
    }
}

</script>

<style>

</style>