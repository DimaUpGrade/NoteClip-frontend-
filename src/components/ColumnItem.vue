<template>
    <div class="div_column" v-bind:id="column.id">
        <input type="button" @click="delete_column(column.id)" class="remove_column" value="X">
        <div>
            <h2 class="h2_column_title">{{ column.title }}</h2>
            
        </div>
        
        <TaskList @asd="toParent()" v-bind:id_column="column.id" v-bind:tasks="tasks" />
    </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue'
import { remove_column } from '../network';


export default {
    data() {
        return {
            //wrong
            tasks: this.column.tasks
        }
    },
    props: {
        column: {
            type: Object,
            required: true
        },
    },
    methods: {
        toParent() {
            this.$emit("asd")
        },
        delete_column (id_column) {
            remove_column(id_column)
            this.$emit("increment_counter_to_zero")
            this.$emit("asd")
        }
    },

    created() {
        // const id = this.$route.params.id;
        // this.tasks = board_1.columns
    },

    mounted () {
        this.$emit("increment_counter_columns", this.column.number)
    },

    components: { TaskList }
}
</script>

<style scoped>
.div_column {
    height: 600px;
    /* background-color: var(--primary); */
    width: 300px;
    padding: 30px;
    padding-right: calc(0vh + scrollbarWidth);
    /* border-radius: 10px; */
    border: 3px dotted var(--primary);

}

.h2_column_title {
    font-size: 24px;
    /* text-decoration: underline; */
    text-align: center;
    color: var(--primary);
    background-color: var(--text);
    border-radius: 0.3vw;
    /* -webkit-text-stroke: 1.2px var(--text); */
}

.remove_column {
    /* background-color: red; */
    margin: 0 0 5% 90%;
    height: 20px;
    width: 20px;
    cursor: pointer;
}

</style>