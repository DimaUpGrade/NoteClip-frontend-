<template>
    <div id="div_column">
        <h2>{{ column.title }}</h2>
        <!-- <p>{{ column.tasks }}</p> -->
        <!-- <p>{{ column.tasks }}</p> -->
        <TaskList 
            v-bind:tasks="tasks"
        />
    </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue'

export default {
    data() {
        return {
            //wrong
            tasks: this.column.tasks
        } 
    },
    // props: ["column"],
    props: {
        column: {
            type: Object,
            required: true
        },
    },
    methods: {

    },
    
    created () {
        // const id = this.$route.params.id;
        // this.tasks = board_1.columns
    },

    components: {TaskList}
}
</script>