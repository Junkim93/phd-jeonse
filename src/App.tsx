import React from 'react'
import style from './App.module.scss'
import cls from 'classnames'
import Main from '@pages/main/index'

function App() {
  return (
    <div className={cls(style.app)}>
      <Main />
    </div>
  )
}

export default App
