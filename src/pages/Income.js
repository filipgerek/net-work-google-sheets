import React, { useState } from 'react'
import { Form } from '../components/Form'
import '../components/Form/Form.css'
import { INCOME_CATEGORIES } from '../constants'

export const Income = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(new Date())
  const [type, setType] = useState(null)
  const [category, setCategory] = useState(null)

  const handleSutbmit = () => {
    fetch(`${url}VÝDAJE`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {name, amount, date, type, category}
    })
  }

  return (
    <Form
      heading="Income"
      name={name}
      setName={setName}
      date={date}
      setDate={setDate}
      type={type}
      setType={setType}
      category={category}
      setCategory={setCategory}
      amount={amount}
      setAmount={setAmount}
      categories={Object.values(INCOME_CATEGORIES)}
      handleSutbmit={handleSutbmit}
    />
  )
}
