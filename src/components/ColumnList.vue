<template>
    <div id="column_list_main">
        <ColumnItem v-for="column in board" v-bind:column="column" @asd="toParent()" />
        <div class="div_add_column">
            <textarea rows="3"></textarea>
        </div>
    </div>
</template>

<script>
import ColumnItem from '@/components/ColumnItem.vue'

export default {
    props: ['board'],

    methods: {
        toParent() {
            this.$emit("asd")
        }
    },
    components: {
        ColumnItem
    }
}

</script>

<style scoped>
div {
    display: inline-block;
    margin: 0rem 1rem;
}

#column_list_main {
    display: flex;
    padding: 1rem;
    width: 100vw;
    text-align: start;
    align-items: flex-start;

}

.div_add_column {
    height: 15vh;
    /* background-color: var(--primary); */
    width: 25vh;
    padding: 3vh;
    /* border-radius: 10px; */
    border: 3px dotted var(--primary);

}

.h2_column_title {
    font-size: 2.0vh;
    /* text-decoration: underline; */
    text-align: center;
    color: white;
    -webkit-text-stroke: 0.14vh var(--text);

}
</style>