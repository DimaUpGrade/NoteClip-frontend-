<template>
    <div class="header_elements_zero header-div">
        <h1 class="header_elements_zero header-h1">{{ title }}</h1>
    </div>
</template>

<script>
    export default {
        props: ['title']
    }
</script>

<style scoped>
    .header_elements_zero {
        padding: 0;
        margin: 0;
    }

    .header-h1 {
        font-size: 3vh;
    }

    .header-div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100vw - scrollbarWidth);
        height: 10vh;
        margin: 5vh 0 10vh 0;
        padding: 5vh 0;
        background-color: yellow;
    }

</style>