import axios from 'axios'

export async function getPosts(){
  axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(function (response){
       return response
     }
    )
    .catch(function (error){
        console.log(error)
      }
    )
}
