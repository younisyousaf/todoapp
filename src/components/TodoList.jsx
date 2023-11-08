import React from 'react'
import '../index.css';

function TodoList(props) {
    return (
        <div className='todo-items'>
            <li className='items'>
                {props.item}
                <span>
                    <i className="fa-solid fa-trash-can icons"
                        onClick={e=>{props.deleteListItem(props.index)}}
                    ></i>
                </span>
            </li>

        </div>
    )
}

export default TodoList;