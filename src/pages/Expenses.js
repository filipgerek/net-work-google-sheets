import React from 'react'
import { Button, DatePicker, Input, Select } from 'antd'
import { Link } from 'react-router-dom'
import './Expenses.css'
import './Income.css'
import Arrow from './arrow-right.svg'

export const Expenses = () => (
  <div className="expenses-styling">
    <div className="expenses">
      <div className="header">
        <Link to="./">
          <img alt="arrow-icon" src={Arrow} className="arrow" />
        </Link>
        <h1>Expenses</h1>
      </div>
      <Input placeholder="Názov" />
      <div className="datepicker w-100">
        <DatePicker />
      </div>
      <div className="datepicker w-100">
        <Select placeholder="Typ" />
      </div>
      <div className="select w-100">
        <Select placeholder="Kategória" />
      </div>
      <div className="input w-100">
        <Input placeholder="Suma" />
      </div>
      <div className="button">
        <Button type="primary" size="large" shape="round" danger>
          Button
        </Button>
      </div>
    </div>
  </div>
)
