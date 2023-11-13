<template>
    <div id="column_list_main">
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
        margin: 0rem 1rem;
    }

    #column_list_main {
        display: flex;
        padding: 1rem;
        width: 100vw;
        text-align: start;
        align-items: flex-start;
        
    }
</style>