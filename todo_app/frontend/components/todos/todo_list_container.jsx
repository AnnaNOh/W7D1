import { connect } from 'react-redux';
import { receiveTodos,
         removeTodo,
         fetchTodos,
         createTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';
import TodoList from './todo_list';


const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
