import React from "react";
function TaskList(props) {
    return (
        <ul>
            {props.task.length === 0 ? (
                <p>No Tasks</p>
            ): (
                props.tasks.map((tasks, index) => {
                    <li key={index}>
                        <input type="checkbox" checked={tasks.completed} />
                        {tasks.text}
                        <button>Delete</button>
                    </li>
                })
            )}
        </ul>
    );
}

export default TaskList;