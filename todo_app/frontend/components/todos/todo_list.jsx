import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <ul>
          {this.props.todos.map(obj =>
            (<TodoListItem key={obj.id}
                           item={obj}
                           removeTodo={this.props.removeTodo}
                           receiveTodo={this.props.receiveTodo}/>)

          )}
        </ul>
        <TodoForm onSubmission={this.props.receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
