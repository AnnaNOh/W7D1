import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h4>{this.props.body}</h4>
    );
  }
}

export default TodoDetailView;
