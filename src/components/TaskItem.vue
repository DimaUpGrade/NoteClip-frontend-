<template>
    <div class="task_div">
        <p>{{ task.title }}</p>
    </div>
</template>

<script>

export default {
    data () {

    },
    props: {
        task: {
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>

.task_div {
    margin-top: 1rem;
    
}

</style>