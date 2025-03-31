import React from 'react';
import {TaskType} from '../src/components';
export default {
    title: 'Example/TaskType',
    component: TaskType,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
}

export const TaskTypeBug = {
    args: {
        color: "red"
    }
}

export const TaskTypeStory = {
    args: {
        color: "green"
    }
}

export const TaskTypeTask = {
    args: {
        color: "blue"
    }
}

export const TaskTypePOC = {
    args: {
        color: "grey"
    }
}