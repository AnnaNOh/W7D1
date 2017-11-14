import { RECEIVE_TODOS,
         RECEIVE_TODO,
         REMOVE_TODO,
         receiveTodos,
         receiveTodo,
         removeTodo } from '../actions/todo_actions.js';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


export const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
      case RECEIVE_TODOS:
        action.todos.forEach((listItem) =>
            { newState[listItem.id] = listItem; }
          );
        return newState;
      case RECEIVE_TODO:
        newState = Object.assign({}, state);
        newState[action.todo.id] = action.todo;
        return newState;
      case REMOVE_TODO:
        newState = Object.assign({}, state);
        delete newState[action.todoId];
        return newState;
      default:
        return state;
  }
};
window.reducers = todosReducer;
