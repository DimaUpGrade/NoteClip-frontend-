<template>
    <div class="task_list">
        <TaskItem 
            v-for="task in tasks"
            v-bind:task="task"
        />
    </div>
</template>

<script>

import TaskItem from '@/components/TaskItem.vue'

export default {
    props: ["tasks"],
    components: {TaskItem}
}

</script>

<style scoped>

.task_list {
    margin-top: 2rem;
    /* background-color: blueviolet; */
    font-size: 15px;
}

</style>