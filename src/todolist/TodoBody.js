import React, { useState } from 'react';
import TodoInput from './TodoInput';

import style from './TodoBody.module.css';

const TodoBody = () => {
    const [items, setItems] = useState([]);
    const addItem = (text) => {
        setItems([...items, { id: Date.now(), text }]);
    }
    return (
        <div className={style['todo-body']}>
            <TodoInput addItem={addItem}></TodoInput>
            <ul className={style['ul-list']}>
                {
                    items.map(
                        (item) => (
                            <li key={item.id}>
                                <i class="material-icons">
                                    panorama_fish_eye</i>
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
