const moment = require('moment')

const utils = {}
//
//
// returns current date in format year-month-day ex. 2019-01-19
utils.currentDay = () => {
  const date = new Date(Date.now())
  const year = date.getFullYear()
  let month = date.getUTCMonth() + 1
  if (month < 10) {
      month = '0' + month.toString()
  }
  const day = date.getDate()
  return `${year}-${month}-${day}`
}
//
//
// returns date one week previous to current date in format year-month-day ex. 2019-01-19
utils.previousWeek = (currentDay) => {
    const current = moment(`${currentDay}`)
    return current.subtract(1, 'week').format().slice(0,10)
}
//
//
// HEADER CREATER
utils.headers = token => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
  }
}

module.exports = utils
