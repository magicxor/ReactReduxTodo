import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { actionCreators } from '../store/taskList/actions';

const TaskRaw = props => (
  <tr>
    <td>
      {props.data.id}
    </td>
    <td>
      {props.data.description}
    </td>
    <td>
      <Button bsStyle="danger" onClick={() => props.deleteTask(props.data.id)}>Delete</Button>
    </td>
  </tr>
);

export const Task = connect(null, actionCreators)(TaskRaw);
