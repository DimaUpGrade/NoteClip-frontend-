<template>
  <div class="start">
    <h1>{{ msg }}</h1>
    <p>
      Зарегистрируйтесь, чтобы пользоваться отечественным приложением <br> для планирования задач и заметок бесплатно прямо сейчас!
    </p>
  </div>
</template>

<script>
export default {
  name: 'StartContent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}

p {
  margin-top: 50px;
}

</style>
