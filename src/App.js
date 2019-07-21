import React from 'react';
import style from './App.module.css';

import TodoList from './todolist/TodoBody.js';

function App() {
  return (
    <div className={style['main-body']}>
      <div className={style['panel']}>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
