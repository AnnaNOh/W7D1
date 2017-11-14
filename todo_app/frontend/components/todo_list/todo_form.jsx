import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: "", done: false};
  }

  updateTitle(event) {
    this.setState({title: event.target.value});
  }

  updateBody(event) {
    this.setState({body: event.target.value});
  }

  submit() {
    this.state.id = uniqueId();
    this.props.onSubmission(this.state);
  }

  render() {
    return(
      <div>
        <label> Title <br />
          <input onChange={this.updateTitle.bind(this)}
                 value={this.state.title}>
          </input>
        </label>

        <br />
        <br />
        <label> Body <br />
          <textarea onChange={this.updateBody.bind(this)}
                 value={this.state.body}>

          </textarea>
        </label>

        <br />
        <br />

        <button onClick={this.submit.bind(this)}>
          Submit
        </button>

      </div>
    );
  }

}

export default TodoForm;
