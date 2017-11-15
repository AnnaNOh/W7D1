import React from 'react';
import { receiveStep, removeStep } from '../../actions/step_actions';

const mapDispatchToProps = dispatch => ({
  receiveStep: (step) => dispatch(receiveStep(step)),
  removeStep: (step) => dispatch(removeStep(step))
});
