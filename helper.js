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
utils.previousWeek = currentDay => {
  const current = moment(`${currentDay}`)
  return current
    .subtract(1, 'week')
    .format()
    .slice(0, 10)
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
//
//
// PED COLOR SETTER KEY AND HELPER FUNC
const colorKey = {
  sad: {
    top: '#428e92',
    bottom: '#00363a',
    lid: 'sad',
    lidHL: 'sad-dark'
  },
  neutral: {
    top: '#cddc39',
    bottom: '#9a0',
    lid: 'neutral',
    lidHL: 'neutral-dark'
  },
  happy: {
    top: '#ffff4d',
    bottom: '#ffd54d',
    lid: 'happy',
    lidHL: 'happy-dark'
  }
}

utils.sleepColorSetter = (goal, currentAmount) => {
  let mood
  if (currentAmount < goal) mood = 'sad'
  else if (currentAmount < goal + goal / 2)
    // class for ped will be sad and sickly
    mood = 'neutral' // class for ped will be neutral - eh
  else mood = 'happy' // class for ped will be health and happy
  return {
    bodyTop: colorKey[mood].top,
    bodyShadow: colorKey[mood].bottom,
    hairFront: colorKey[mood].top,
    hairBack: colorKey[mood].bottom,
    lid: colorKey[mood].lid,
    lidHL: colorKey[mood].lidHL,
    mood
  }
}

const opacityLidKey = {
  sad: {
    topLid: 'opacity: 0',
    bottomLid: 'opacity: 100'
  },
  neutral: {
    topLid: 'opacity: 0',
    bottomLid: 'opacity: 0'
  },
  happy: {
    topLid: 'opacity: 0',
    bottomLid: 'opacity: 0'
  }
}

utils.opacitySetter = (goal, currentAmount) => {
  let mood
  if (currentAmount < goal) mood = 'sad'
  else if (currentAmount < goal + goal / 2)
    // class for ped will be sad and sickly
    mood = 'neutral' // class for ped will be neutral - eh
  else mood = 'happy' // class for ped will be health and happy

  return {
    topLid: opacityLidKey[mood].topLid,
    bottomLid: opacityLidKey[mood].bottomLid
  }
}

utils.opacityGetter = (day, sleepMin, goal) => {
  const sleepGoal = goal / 2
  return utils.opacitySetter(sleepGoal, sleepMin)
}

module.exports = utils
