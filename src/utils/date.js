import moment from 'moment'

export const convertDateToString = (date) => moment(date).format('D.M.YYYY')
