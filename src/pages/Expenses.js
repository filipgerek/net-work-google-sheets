import React, { useState } from 'react'
import { Button, DatePicker, Input, Select } from 'antd'
import { Link } from 'react-router-dom'
import moment from 'moment'
import './Expenses.css'
import './Income.css'
import Arrow from './arrow-right.svg'

export const Expenses = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(new Date())
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')

  return (
    <div className="expenses-styling">
      <div className="expenses">
        <div className="header">
          <Link to="./">
            <img alt="arrow-icon" src={Arrow} className="arrow" />
          </Link>
          <h1>Expenses</h1>
        </div>
        <Input
          placeholder="Názov"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="datepicker w-100">
          <DatePicker
            allowClear={false}
            value={moment(date)}
            onChange={(e) => setDate(e)}
          />
        </div>
        <div className="datepicker w-100">
          <Select
            placeholder="Typ"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="select w-100">
          <Select
            placeholder="Kategória"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="input w-100">
          <Input
            placeholder="Suma"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="button">
          <Button type="primary" size="large" shape="round" danger>
            Button
          </Button>
        </div>
      </div>
    </div>
  )
}
