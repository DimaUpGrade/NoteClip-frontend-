<template>
    <div class="board-in-boardlist" @click="goToBoard(board.id)">
        <h2 class="title-of-board">
            {{ board.title }}
        </h2>
        <p class="description-of-board">
            {{ board.description }}
        </p>
    </div>
</template>

<script>
import router from '../router';

export default {

    data() {

    },
    props: {
        board: {
            type: Object,
            required: true
        }
    },
    methods: {
        goToBoard(id) {
            // alert(id);
            router.push({ path: '/board/' + id});
        }
    }
}
</script>

<style>
.board-in-boardlist {
    width: 320px;
    height: 150px;
    background-color: var(--primary);
    color: var(--text);
    align-items: center;
    text-align: center;
    cursor: pointer;
}

.board-in-boardlist:hover {
    background-color: var(--accent);
}

.title-of-board {
    text-shadow: 1px 2px var(--accent);
}

.description-of-board {
    -webkit-line-clamp: 3;
    font-size: 10pt;
    width: 260px;
    height: 45px;
    line-height: 15px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

</style>