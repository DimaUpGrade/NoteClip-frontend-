<template>
    <div>
        <h1>Заглушка</h1>
        <h1 id="output_h1">{{ result }}</h1>
        <button @click="showLocalStorage">Отобразить локал</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            result: "",
        }
    },
    methods: {
        showLocalStorage () {
            this.result = localStorage.getItem('count')
        }
    }
}

</script>