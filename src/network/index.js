import axios from 'axios';
// axios.defaults.xsrfCookieName = 'csrfToken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

const API_URL = "https://hoofeddragon417.pythonanywhere.com";
import router from '../router';

// авторизация
function login_account(username_, password_) {
    axios.post(API_URL + '/api/login/', {
        username: username_,
        password: password_
    })
        .then((response) => {
            localStorage.setItem("token", response.data['Token']);
            router.push({ path: '/board-list' });
        })
        .catch((error) => {

            console.log(error);
        });
}

// перенос таски в другую колонку
function change_task_column(id_column, id_task) {
    axios
        .patch(API_URL + '/api/tasks/' + id_task + '/', {
            "id_column": id_column
        }, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("token")
            }
        })
        .catch((error) => {
            alert("Произошла ошибка! \n " + error)
        });
}

// получение данных доски по id доски
async function get_data_board(id_board) {
    const result = await axios
        .get(API_URL + '/api/boards/' + id_board, {
            headers: {
                // 'X-CSRFToken': Cookies.get('csrftoken')
            }
        })
    // .then((response) => {return response.data.columns} );
    return result.data.columns
}


// сделать миграцию с возможностью передавать null в priority и finish_by
function add_task(id_column, title="test", body = "test", color = 1, priority = 1, finish_by = null) {
    // if finish_by пустая то дать дату следующего дня 00:00:00
    if (finish_by == null) {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate(); //

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

       finish_by = yyyy + '-' + mm + '-' + dd + 'T' + '00:00:00Z';
    }

    axios
        .post(API_URL + '/api/tasks/', {
            "id_column": id_column,
            "title": title,
            "body": body,
            "color": color,
            "priority": priority,
            "finish_by": finish_by
        }, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("token")
            }
        })
        .catch((error) => {
            alert("Произошла ошибка! \n " + error)
        });
}

function add_column (title, number) {
    axios
        .post(API_URL + '/api/columns/', {
            "title": title,
            "number": number
        }, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("token")
            }
        })
        .catch((error) => {
            alert("Произошла ошибка! \n " + error)
        });
}

function remove_task (id_task) {
    axios
        .delete(API_URL + '/api/tasks/' + id_task + '/', {}, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("token")
            }
        })
        .catch((error) => {
            alert("Произошла ошибка! \n " + error)
        });
}


export { API_URL, axios, login_account, change_task_column, get_data_board, add_task, remove_task, add_column }