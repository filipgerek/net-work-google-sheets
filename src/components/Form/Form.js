import React from 'react'
import { Button, DatePicker, Input, Select } from 'antd'
import moment from 'moment'
import { ArrowBack } from '../ArrowBack/ArrowBack'
import './Form.css'
import { PAYMENT_TYPES } from '../../constants'

const { Option } = Select

export const Form = ({
  heading,
  name,
  date,
  type,
  category,
  amount,
  setName,
  setDate,
  setType,
  setCategory,
  setAmount,
  categories,
  handleSubmit
}) => {
const handleButtonClick = () => {
  handleSutbmit()
  setAmount('')
  setDate(new Date())
  setName("")
  setType(null)
  setCategory(null)
}
  return <div>
    <div className="container">
      <div className="header">
        <ArrowBack />
        <h1>{heading}</h1>
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
      <div className="select w-100">
        <Select
          placeholder="Typ"
          value={type}
          onChange={(value) => setType(value)}
        >
          {Object.values(PAYMENT_TYPES).map((optionType) => (
            <Option key={optionType} value={optionType}>
              {optionType}
            </Option>
          ))}
        </Select>
      </div>
      <div className="select w-100">
        <Select
          placeholder="Kategória"
          value={category}
          onChange={(value) => setCategory(value)}
        >
          {categories.map((optionCategory) => (
            <Option key={optionCategory} value={optionCategory}>
              {optionCategory}
            </Option>
          ))}
        </Select>
      </div>
      <div className="input w-100">
        <Input
          placeholder="Suma"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="button">
        <Button onClick={handleButtonClick} type="primary" size="large" shape="round">
          Add to table
        </Button>
      </div>
    </div>
  </div>
}
