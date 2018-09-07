import * as types from './actionTypes';

export function setNewTaskDescription(taskDescription) {
    return {
        type: types.SET_NEW_TASK_DESCRIPTION,
        taskDescription: taskDescription
    };
}

export function addTask(taskId, taskDescription) {
    return {
        type: types.ADD_TASK,
        taskId: taskId,
        taskDescription: taskDescription
    };
}

export function deleteTask(taskId) {
    return {
        type: types.DELETE_TASK,
        taskId: taskId
    };
}

export const actionCreators = {
    setNewTaskDescription,
    addTask,
    deleteTask
};