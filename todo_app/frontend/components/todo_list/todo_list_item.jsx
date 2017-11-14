import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };
  }

  renderStatus(status) {
    if (status === false) {
      return "UNDO";
    } else {
      return "DONE";
    }
  }

  changeStatus(item) {
    if (item.done === true) {
      item.done = false;
    } else {
      item.done = true;
    }
    this.props.receiveTodo(item);
  }

  changeDetail(detail) {
    let value = (this.state.detail === false)? true : false;
    this.setState({ detail: value });
  }

  renderDetailView(){
    if (this.state.detail === true) {
      return (
        <TodoDetailView body={this.props.item.body}/>
      );
    } else {
      return;
    }
  }

  render(){
    let { item } = this.props;
    return(
      <li>
        <h2 onClick={this.changeDetail.bind(this)}>
          {item.title}
        </h2>
        {this.renderDetailView.apply(this)}
        <button onClick={()=> this.changeStatus(item)}>
          {this.renderStatus(item.done)}
        </button>
      </li>
    );
  }

}
export default TodoListItem;
