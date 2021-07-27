import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { Income, Expenses, HomePage } from './pages'

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/income" component={Income} />
        <Route path="/expenses" component={Expenses} />
      </Switch>
    </Router>
  </div>
)

export default App
