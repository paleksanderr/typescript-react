

import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/17';

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;

}

axios.get(url).then(response => {
  const todo = response.data;
  const id = todo.Id;
  const userId = todo.userId;
  const title = todo.Title;
  const complete = todo.completed;
  console.log(`the id is ${id} the userID is ${userId} the title is ${title} the complete is ${complete}`);
})