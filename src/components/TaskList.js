import React from 'react';
import { connect } from 'react-redux';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
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

    <InputGroup className="mb-3">
      <FormControl placeholder="Task description" value={props.newTaskDescription} onChange={(e) => props.setNewTaskDescription(e.target.value)} />
      <InputGroup.Append>
        <Button variant="outline-primary" onClick={() => props.addTask(getNextId(props.tasks.map(task => task.id)), props.newTaskDescription)}>Add</Button>
      </InputGroup.Append>
    </InputGroup>

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
