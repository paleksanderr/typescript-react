

import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/17';

interface Todoo {
  id: number;
  title: string;
  completed: boolean;

}

axios.get(url).then(response => {
  const todo = response.data as Todoo;
  const id = todo.id;
  const title = todo.title;
  const complete = todo.completed;
  console.log(`the id is ${id} the userID is ${userId} the title is ${title} the complete is ${complete}`);
})