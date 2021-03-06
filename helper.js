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
  if (currentAmount > goal * 9) mood = 'happy'
  else if (currentAmount > goal * 6)
    // at least 90% of goal
    mood = 'neutral' // at least 70% of goal
  else mood = 'sad'
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
    bottomLid: 'opacity: 100',
    mouth: {
      mouthSad: 'opacity: 100',
      mouthNeutral: 'opacity: 0',
      mouthHappy: 'opacity: 0'
    }
  },
  neutral: {
    topLid: 'opacity: 0',
    bottomLid: 'opacity: 0',
    mouth: {
      mouthSad: 'opacity: 0',
      mouthNeutral: 'opacity: 100',
      mouthHappy: 'opacity: 0'
    }
  },
  happy: {
    topLid: 'opacity: 0',
    bottomLid: 'opacity: 0',
    mouth: {
      mouthSad: 'opacity: 0',
      mouthNeutral: 'opacity: 0',
      mouthHappy: 'opacity:100'
    }
  }
}

utils.opacitySetter = (goal, currentAmount) => {
  let mood
  if (currentAmount > goal * 9) mood = 'happy'
  else if (currentAmount > goal * 6)
    // at least 90% of goal
    mood = 'neutral' // at least 70% of goal
  else mood = 'sad'
  return {
    topLid: opacityLidKey[mood].topLid,
    bottomLid: opacityLidKey[mood].bottomLid,
    mouth: opacityLidKey[mood].mouth
  }
}

utils.opacityGetter = (day, sleepMin, goal) => {
  const sleepGoal = goal / 10
  return utils.opacitySetter(sleepGoal, sleepMin)
}

utils.minToHrMin = minutes => {
  const hr = Math.floor(minutes / 60)
  const remainder = minutes % 60
  return `${hr} hr ${remainder} min`
}

module.exports = utils
