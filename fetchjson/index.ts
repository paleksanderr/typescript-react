

import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/17';

interface Todo {
  id: number;
  title: string;
  completed: boolean;

}

axios.get(url).then(response => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const complete = todo.completed;
  logTodo(id, title, complete);
  
})

const logTodo = (i:number, titl:string, complete:boolean) => {
console.log(`the id is ${i} ) 
the title is ${titl} 
the complete is ${complete}`);
}