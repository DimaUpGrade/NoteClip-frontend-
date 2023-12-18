<template>
    <div class="header_elements_zero header-div">
        <div class="inline_div">
            <div id="return_button" @click="return_to_board_list()">
                <p id="return_button_p">Назад</p>
            </div>
            <h1 class="header_elements_zero header-h1">{{ title }}</h1>
        </div>

    </div>
</template>

<script>
import router from '../router';

export default {
    props: ['title'],
    methods: {
        return_to_board_list() {
            router.push({ path: '/board-list' });
        }
    }
}
</script>

<style scoped>
.inline_div {
    display: inline-flex;
    width: 100%;
}

.header_elements_zero {
    padding: 0;
    margin: 0;
}

.header-h1 {
    display: inline;
    font-size: 32px;
    width: 20%;
    margin: 0;
    margin: 0 40% 0 30%;
    text-align: center;
    vertical-align: bottom;
    color: var(--primary);
}

#return_button {
    color: var(--primary);
    width: 8%;
    padding-left: 2%;
}

#return_button_p {
    height: 100%;
    display: flex;
    color: var(--primary);
    text-decoration: underline;
    font-weight: 16px;
    font-size: 16px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
}

.header-div {
    /* display: flex;
        align-items: center;
        justify-content: center; */
    width: calc(100vw - scrollbarWidth);
    min-height: 40px;
    margin: 0vh 0 1vh 0;
    padding: 35px 0;
    background-color: var(--text);
}
</style>