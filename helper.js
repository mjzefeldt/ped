const utils = {};

// returns current date in format year-month-day ex. 2019-01-19
utils.currentDay = () => {
    const now = Date.now()
    return `${now.getFullYear()}-${now.getUTCMonth() + 1}-${now.getDate()}`
}

module.exports = utils
