export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';

export const receiveSteps = (steps, id) => ({
  type: RECEIVE_STEPS,
  id,
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
window.actions = {};
window.actions.steps = { receiveSteps, receiveStep, removeStep };
