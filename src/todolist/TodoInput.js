import React, { useState } from 'react';
import style from './TodoInput.module.css';

const TodoInput = ({ addItem }) => {
    const [text, setText] = useState('');
    const onChangeText = e => {
        setText(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        addItem(text);
        setText('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='ADD A NEW MISSION'
                className={style['input-body']}
                value={text}
                onChange={onChangeText}
            />
            <button type='submit' className={style['submit']}>
                +
      </button>
        </form>
    );
};

export default TodoInput;

