<template>
    <div>

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