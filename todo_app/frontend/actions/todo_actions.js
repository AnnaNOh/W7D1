import APIUtil from '../util/todo_api_util';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  todoId
});

export const fetchTodos = () => dispatch => (
  APIUtil.fetchTodo().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => dispatch => (
  APIUtil.createTodo(todo).then(receivedtodo => dispatch(receiveTodo(receivedtodo)))
);

window.actions = {};
window.actions.todos = { receiveTodos, receiveTodo, removeTodo, fetchTodos };
