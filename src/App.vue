<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/registration" tag="button">Registration</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Old+Uyghur&family=Roboto:wght@700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  height: 100vh;
  width: calc(100vw - scrollbarWidth);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
