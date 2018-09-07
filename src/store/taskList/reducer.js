import * as actionTypes from './actionTypes';

const initialState = {
    newTaskDescription: "",
    tasks: []
};

export const reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case actionTypes.SET_NEW_TASK_DESCRIPTION:
            return { ...state, newTaskDescription: action.taskDescription };
        case actionTypes.ADD_TASK:
            return { ...state, tasks: [...state.tasks, { id: action.taskId, description: action.taskDescription }] };
        case actionTypes.DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(item => item.id !== action.taskId) };
        default:
            return state;
    }
};