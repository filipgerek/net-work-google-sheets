import React, { useState } from 'react'
import { Form } from '../components/Form'
import '../components/Form/Form.css'
import { INCOME_CATEGORIES } from '../constants'
import { convertDateToString } from '../utils/date'

export const Income = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(new Date())
  const [type, setType] = useState(null)
  const [category, setCategory] = useState(null)

  const url =
    process.env.NODE_ENV === 'production'
      ? 'https://maftvej-net-worth-api.herokuapp.com/'
      : 'http://localhost:3010/'

  const handleSubmit = async () => {
    const { status } = await fetch(`${url}ZISKY`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        amount,
        date: convertDateToString(date),
        type,
        category,
      }),
    })
    alert(status)
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
      handleSubmit={handleSubmit}
    />
  )
}
