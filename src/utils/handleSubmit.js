import { convertDateToString } from './date'

const API =
  process.env.NODE_ENV === 'production'
    ? 'https://maftvej-net-worth-api.herokuapp.com/'
    : 'http://localhost:3010/'

const url = (param) => `${API}${param}`

export const handleSubmit = async ({
  name,
  amount,
  date,
  type,
  category,
  param,
}) => {
  const { status } = await fetch(url(param), {
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
