<template>
    <div class="div_column" v-bind:id="column.id">
        <h2 class="h2_column_title">{{ column.title }}</h2>
        <TaskList @asd="toParent()" v-bind:id_column="column.id" v-bind:tasks="tasks" />
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
        toParent() {
            this.$emit("asd")
        }
    },

    created() {
        // const id = this.$route.params.id;
        // this.tasks = board_1.columns
    },

    components: { TaskList }
}
</script>

<style scoped>
.div_column {
    height: 60vh;
    /* background-color: var(--primary); */
    width: 25vh;
    padding: 3vh;
    /* border-radius: 10px; */
    border: 3px dotted var(--primary);

}

.h2_column_title {
    font-size: 3.0vh;
    /* text-decoration: underline; */
    text-align: center;
    color: white;
    -webkit-text-stroke: 0.2vh var(--text);

}
</style>