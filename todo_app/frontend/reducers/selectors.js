
export const allTodos = (state) => (
  Object.values(state.todos)
);

export const stepsByTodoId = (state, todoId) => {
  let stepItems = Object.values(state.steps);
  let stepList = stepItems.filter( (stepItem) => {
    return stepItem["todo_id"] === todoId;
  });
  return stepList;
};

window.stepsSelector = stepsByTodoId;
