<template>
    <div class="task_list">
        <TaskItem 
            v-for="task in tasks"
            v-bind:task="task"
        />
        <div class="task_div">
            <p>+ Добавить</p>
        </div>
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

.task_div {
    margin-top: 20px;
    background-color: var(--primary);
    border-radius: 0.3vw;
}

</style>