import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from '@pages/main/index'
import TenCommandments from '@pages/ten-commandments/index'
import ChecklistGuide from '@pages/checklist-guide/index'
import Testament from '@pages/testament/index'
import {
  MAIN_PATH,
  TEN_COMMANDMENTS_PATH,
  CHECKLIST_GUIDE_PATH,
  TESTAMENT_PATH,
} from '@router/path'

function App() {
  return (
    <Router>
      <>
        <Route exact path={MAIN_PATH} component={Main} />
        <Route exact path={TEN_COMMANDMENTS_PATH} component={TenCommandments} />
        <Route exact path={CHECKLIST_GUIDE_PATH} component={ChecklistGuide} />
        <Route exact path={TESTAMENT_PATH} component={Testament} />
      </>
    </Router>
  )
}

export default App
