// singular task component
import { FaTimes } from 'react-icons/fa'

export const Task = ({ task, onDelete, onToggle }) => {
    return (
        //if div has task.reminder is true then have class reminder else nothing
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>

        </div>        
    )
}
