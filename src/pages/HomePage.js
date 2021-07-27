import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'

export const HomePage = () => (
  <div>
    <ul>
      <div className="list-buttons">
        <Link to="/income">
          <div className="income-homepage">
            <li>Income</li>
          </div>
        </Link>
        <Link to="/expenses">
          <div className="expenses-homepage">
            <li>Expenses</li>
          </div>
        </Link>
      </div>
    </ul>
  </div>
)
