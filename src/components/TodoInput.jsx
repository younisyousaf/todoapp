import React, { useState } from 'react'

function TodoInput(props) {
    const [textInput, setTextInput] = useState('');
    return (
        <div className='input-container'>
            <input
                id='my_input'
                type="text"
                className='input-todo'
                placeholder='Add Todo Item...'
                value={textInput}
                onChange={(e) => {
                    setTextInput(e.target.value)
                }}
            />
            <button
                className='input-btn'
                onClick={() => {
                    if (textInput === '') {
                        alert('Please Enter Some Data....')
                    } else {
                        props.listItems(textInput)
                        setTextInput('')
                    }

                }}
            >+</button>
        </div>
    )
}

export default TodoInput;
