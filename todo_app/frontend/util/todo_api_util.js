const fetchTodo = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos'
  });
};

const createTodo = (todo) => {
  console.log(todo);
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: todo,
    dataType: 'json'
  });
};

export default { fetchTodo, createTodo };
window.fetchTodo = fetchTodo;
