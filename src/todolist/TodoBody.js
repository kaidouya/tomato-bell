import React, { useState } from 'react';
import TodoInput from './TodoInput';

import style from './TodoBody.module.css';
import Icon from '@material-ui/core/Icon';

const TodoBody = () => {
    const [items, setItems] = useState([]);
    const addItem = (text) => {
        setItems([...items, { id: Date.now(), text }]);
    }
    return (
        <div className={style['todo-body']}>
            <TodoInput addItem={addItem} className={style['todo-input']}></TodoInput>
            <ul className={style['ul-list']}>
                {
                    items.map(
                        (item) => (
                            <li key={item.id}>
                                <Icon className={style['circle']}>radio_button_unchecked</Icon>
                                {item.text}
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );

}

export default TodoBody;
