<template>
    <div>
        <ColumnItem
            v-for="column in board"
            v-bind:column="column"
        />
    </div>
    
</template>

<script>
import ColumnItem from '@/components/ColumnItem.vue'

export default {
    props: ['board'],

    methods: {

    },
    components: {
        ColumnItem
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