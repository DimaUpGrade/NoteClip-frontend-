<template>
    <header>
        <h1 id="logo_title">Note<span id="clip_span">Clip</span></h1>
        <div id="user_info">
            <p id="username_h2"><span id="username_span">Пользователь:</span> {{ username }}</p>
            <LogOutButton />  
        </div>
    </header>
    
    <div id="Boards">
        <BoardList @refresh_list="refresh()" v-bind:boards="boards" k="boards"/>
        
    </div>
</template>

<script>

import LogOutButton from '@/components/LogOutButton.vue';
import BoardList from '@/components/BoardList.vue';
import { tokenIsSet } from '../validation';
import router from '../router';
import { API_URL, axios, get_user_info } from '../network';


// let username = 'username';

export default {
    name: 'Boards',
    methods: {
        refresh() {
            axios
                .get(API_URL + '/api/user-boards/', {
                    headers: {
                        'Authorization': 'Token ' + localStorage.getItem("token")
                    }
                })
                .then(response => this.boards = response.data);
        }
    },
    mounted() {
        if (tokenIsSet()) {
            axios
                .get(API_URL + '/api/user-boards/', {
                    headers: {
                        'Authorization': 'Token ' + localStorage.getItem("token")
                    }
                })
                .then(response => this.boards = response.data);
        }
        else {
            router.replace({ path: '/' });
        }

        get_user_info().then(result => this.username = result);
        // alert(get_user_info())
    },
    data() {
        return {
            boards: [],
            username: '123'
        }
    },
    components: {
        BoardList, LogOutButton
    }
}

</script>

<style>
body {
    justify-content: start;
}

header {
    display: inline-flex;
    width: 100%;
    background-color: var(--text);
}

#username_span {
    text-decoration: underline;
    color: var(--secondary);
}

#username_h2 {
    text-align: start;
    color: var(--accent);
    margin-bottom: 2%;
    
}

#user_info {
    width: 20%;
    height: 30%;
    margin: 2% 0% 2% 0%;
    
}

#logo_title {
    padding: 0% 0% 0% 0%;
    margin: 2% 60% 2% 1%;
    width: 20%;
    height: 30%;
    color: var(--accent);
}

#clip_span {
    color: var(--secondary);
    /* -webkit-text-stroke: 1.2px var(--secondary); */
}


</style>