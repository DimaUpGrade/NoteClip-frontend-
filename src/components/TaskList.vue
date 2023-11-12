<template>
    <div>
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