<template>
  <div class="home">

    <img id="logo_pic" alt="Noteclip logo" src="../assets/logo.png">
    <div class="start">
      <h1 id="logo_h1"><span id="logo_span">Note</span>Clip</h1>
      <p>
        Зарегистрируйтесь, чтобы пользоваться отечественным приложением <br> для планирования задач и заметок бесплатно
        прямо сейчас!
      </p>
    </div>

    <br>
    <div id="buttons_div">
      <button @click="go_login" class="auth_button">Войти</button>
      <br>
      <button @click="go_registration" class="auth_button">Зарегистрироваться</button>
    </div>
  </div>
</template>

<script>

import { logicalExpression } from '@babel/types';
import router from '../router';
import { tokenIsSet } from '../validation';

export default {
  data () {

  },
  methods : {
    go_login () {
      router.push({ path: '/login'})
    },
    go_registration () {
      router.push({ path: '/registration'})
    }
  },
  mounted() {
        if (tokenIsSet()) {
            router.replace({ path: '/board-list/' });
        }
    }
}



// @ is an alias to /src
// import StartContent from '@/components/StartContent.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     StartContent
//   }
// }
</script>

<style>
:root {
  --text: #2c3e50;
  /* --text: #020309; */
  --background: #eaecfb;
  --primary: #e7da83;
  --secondary: #ccd1f5;
  --accent: #ceb727;
}


body {
  background-color: var(--background);
}

h1 {
  padding-bottom: 3vh;
}

#logo_pic {
  max-width: 30vw;
  height: auto;
}

/* .home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
} */

#logo_h1 {
  padding-bottom: 20px;
  color: var(--text);
  font-family: 'Noto Serif Old Uyghur', serif;
}

p {
  color: var(--text);
  font-family: 'Roboto', sans-serif;
}

#logo_span {
  color: var(--accent);
  font-family: 'Noto Serif Old Uyghur', serif;
}

.auth_button {
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  background-color: var(--primary);
  border: none;
  border-radius: 10px;
  color: var(--text);
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.auth_button:hover {
  background-color: var(--accent);
}

.auth_button:active {
  background-color: #88a2c2;
}
</style>
