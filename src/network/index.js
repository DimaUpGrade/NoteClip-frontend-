import axios from 'axios'

async function getPosts(){
  axios.get('http://jsonplaceholder.typicode.com/posts')
    .catch(function (error){
      console.log(error)
    })
}
