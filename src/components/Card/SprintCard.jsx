import React from 'react';
import Card from './Card';
import Rounded from '../Rounded/Rounded';
import TaskType from '../TaskType/TaskType';
const SprintCard = (props) => {
    const {description, ticketId, storypoint, assignee, onClick} = props;
    const handleClick = () => {
        console.log("Card Click");
        onClick?.(props)
    };
    return (
        <Card className="sprint-card" onClick={handleClick}>
            <Card.Content>
                <p>{description}</p>
            </Card.Content>
            <Card.Footer>
                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                        <TaskType color="red"/>
                        {ticketId}
                    </div>
                    <div className='flex gap-4'>
                        <Rounded>{storypoint}</Rounded>
                        <Rounded>{assignee}</Rounded>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    )
};

export default SprintCard;