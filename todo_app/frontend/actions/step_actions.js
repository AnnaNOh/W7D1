export const RECEIVE_STEPS = "receive_steps";
export const RECEIVE_STEP = "receive_step";
export const REMOVE_STEP = "remove_step";

export const receiveSteps = (steps) => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = (step) => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = (step) => ({
  type: REMOVE_STEP,
  step
});
// window.actions = {};
// window.actions.steps = { receiveSteps, receiveStep, removeStep };
