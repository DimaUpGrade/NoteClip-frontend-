<template>
    <div>
        <BoardItem
        v-for="board in boards"
        v-bind:board="board"
        />
    </div>
</template>

<script>
import BoardItem from '@/components/BoardItem.vue'

export default {
    props: ['boards'],
    components: {
        BoardItem
    }
}
</script>

<style scoped>
    div {
        display: inline-block;
        padding: 2rem;
        margin: 2rem;
    }
</style>