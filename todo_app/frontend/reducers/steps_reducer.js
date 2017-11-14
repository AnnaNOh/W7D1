import { RECEIVE_STEPS,
         RECEIVE_STEP,
         REMOVE_STEP,
         receiveSteps,
         receiveStep,
         removeStep } from '../actions/step_actions.js';

const initialState = {
  1: { // this is the step with id = 1
     id: 1,
     title: 'walk to store',
     done: false,
     todo_id: 1
   },
   2: { // this is the step with id = 2
     id: 2,
     title: 'buy soap',
     done: false,
     todo_id: 1
   }
};

export const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
      // case RECEIVE_STEPS:
        // action.todos.forEach((listItem) =>
        //     { newState[listItem.id] = listItem; }
        //   );
        // return newState;
      // case RECEIVE_STEP:
        // newState = Object.assign({}, state);
        // newState[action.todo.id] = action.todo;
        // return newState;
      // case REMOVE_STEP:
        // newState = Object.assign({}, state);
        // delete newState[action.todoId];
        // return newState;
      default:
        return state;
  }
};
