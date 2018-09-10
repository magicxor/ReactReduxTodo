import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Task } from './Task';
import * as TaskListSelectors from '../store/taskList/selectors';
import { actionCreators } from '../store/taskList/actions';

function getNextId(idArray) {
  if (!Array.isArray(idArray) || idArray.length === 0) {
    return 0;
  }
  return Math.max.apply(Math, idArray) + 1;
}

const TaskListRaw = props => (
  <div>
    <h1>Tasks</h1>
    <div className="input-group">
      <FormControl type="text" placeholder="Task description" value={props.newTaskDescription} onChange={(e) => props.setNewTaskDescription(e.target.value)} />
      <span className="input-group-btn">
        <Button bsStyle="primary" onClick={() => props.addTask(getNextId(props.tasks.map(task => task.id)), props.newTaskDescription)}>Add</Button>
      </span>
    </div>
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col-md-2">ID</th>
          <th scope="col-md-5">Description</th>
          <th scope="col-md-5">#</th>
        </tr>
      </thead>
      <tbody>
        {
          props.tasks.map(task => {
            return <Task key={task.id} data={task} />;
          })
        }
      </tbody>
    </table>
  </div>
);

function mapStateToProps(state) {
  return {
    tasks: TaskListSelectors.getTasks(state),
    newTaskDescription: TaskListSelectors.getNewTaskDescription(state)
  };
}

export const TaskList = connect(mapStateToProps, actionCreators)(TaskListRaw);
