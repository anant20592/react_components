import React from 'react';

const TaskType = ({ color, content }) => {
    return (
        <div className="w-6 h-6 flex items-center justify-center" style={{ backgroundColor: color }}>
            {content}
        </div>
    );
};

export default TaskType;