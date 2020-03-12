import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/50';

interface todo {
    userId: number,
    completed: boolean
}

axios.get(url).then(response => {

    let data = response.data as todo
    console.log(data.userId);
    console.log(data.completed);
});