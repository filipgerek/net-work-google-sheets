import { Button, DatePicker, Input, Select } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './Income.css'
import Arrow from './arrow-right.svg'

export const Income = () => (
  <div>
    <div className="income">
      <div className="header">
        <Link to="./">
          <img alt="arrow-icon" src={Arrow} className="arrow" />
        </Link>
        <h1>Income</h1>
      </div>
      <Input placeholder="Názov" />
      <div className="datepicker w-100">
        <DatePicker />
      </div>
      <div className="select w-100">
        <Select placeholder="Typ" />
      </div>
      <div className="select w-100">
        <Select placeholder="Kategória" />
      </div>
      <div className="input w-100">
        <Input placeholder="Suma" />
      </div>
      <div className="button">
        <Button type="primary" size="large" shape="round">
          Button
        </Button>
      </div>
    </div>
  </div>
)
