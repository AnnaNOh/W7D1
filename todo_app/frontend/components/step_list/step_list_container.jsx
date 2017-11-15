import React from 'react';
import { connect } from 'react-redux';
// import steplist from './step_list';
import { receiveStep } from '../../actions/step_actions';
import { stepsByTodoId } from '../../reducers/selectors';

const mapDispatchToProps = dispatch => ({
  receiveStep: (step) => dispatch(receiveStep(step))
});

const mapStateToProps = state => ({
  steps: state.steps
  // todo_id:
});
