import React from 'react';
import style from './App.module.css';

import TodoList from './todolist/TodoBody.js';
import Timer from './timer/Timer';

function App() {
  return (
    <div className={style['main-body']}>
      <div className={style['panel']}>
        <TodoList />
        <Timer />
      </div>
    </div>
  );
}

export default App;
