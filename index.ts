import axios from 'axios';

const url = 'http://localhost:5000/user';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then((response) => {
	const todo = response.data as Todo;
	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;

	logTodo(id, title, completed);

	/*
	console.log(response.data);
	const todo = response.data;
	const ID = todo.ID;
	const title = todo.Title;
	const finished = todo.finished;

	console.log(`
    The TODO with id : ${ID}
    Has a title of : ${title}
    Is it finished : ${finished}
  `);
  */
});

const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`
    The TODO with id : ${id}
    Has a title of : ${title}
    Is it finished : ${completed}
  `);
};
