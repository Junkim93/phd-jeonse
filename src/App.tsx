import React from 'react'
import style from './App.module.scss'
import cls from 'classnames'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from '@pages/main/index'
import TenCommandments from '@pages/ten-commandments/index'

function App() {
  return (
    <Router>
      <div className={cls(style.app)}>
        <Route exact path="/" component={Main} />
        <Route exact path="/ten-commandments" component={TenCommandments} />
      </div>
    </Router>
  )
}

export default App
