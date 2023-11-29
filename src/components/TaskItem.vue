<template>
    <div class="task_div">
        <p class="task_p">{{ task.title }}</p>
        <div style="display: inline-flex;">
            <button class="edit_button">✎</button>
            <button class="delete_button">X</button>
            <input class="date_selector" type="date">
        </div>        
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
    margin-top: 20px;
    background-color: var(--primary);
    border-radius: 0.3vw;
}

.task_p {
    font-size: 1.5vh;
    padding: 1vh 1vw;
}

button {
    border: 0.1vw solid black;
    font-size: 1.1vh;
    width: 2vh;
    height: 2vh;
}

.edit_button {
    margin: 0 0 0.5vh 1vw;
}

.delete_button {
    margin: 0 0 0 0.2vw;
}

.date_selector {
    width: 4vw;
    height: 2vh;
    border-radius: 0px;
    border: 0.1vw solid black;
    font-size: 1.1vh;
    margin: 0 0 0 0.2vw;
}

</style>