const passport = require('passport')
const router = require('express').Router()
const axios = require('axios')
const FitbitStategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy
const {User} = require('../db/models')
module.exports = router

if (!process.env.FITBIT_CLIENT_ID || !process.env.FITBIT_CLIENT_SECRET) {
  console.log('Fitbit client id/secrete not found.')
} else {
  const fitbitConfig = {
    clientID: process.env.FITBIT_CLIENT_ID,
    clientSecret: process.env.FITBIT_CLIENT_SECRET,
    callbackURL: process.env.FITBIT_CALLBACK
  }

  const strategy = new FitbitStategy(
    fitbitConfig,
    (accessToken, refreshToken, profile, done) => {
      const fitbitId = profile.id
      User.findOrCreate({
        where: {fitbitId},
        defaults: {fitbitId}
      })
        .then(([user]) => done(null, user))
        .catch(done)
    }
  )

  passport.use(strategy)

  router.get(
    '/',
    passport.authenticate('fitbit', {scope: ['activity', 'profile']})
  )

  const headers = {
    Authorization: 'in_secrets_for_now',
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  // already routed - just need callback here...
  router.get(
    '/callback',
    async (req, res, next) => {
      console.log(req.query)
      // queryResult = req.query.code
      let data = `REST_IN_SECRETS_${req.query.code}`
      try {
        const result = await axios.post(
          'https://api.fitbit.com/oauth2/token',
          data,
          {headers}
        )
        console.log('YYYYAAAYYY!', result.data.access_token)
      } catch (err) {
        console.error(err)
      }
    },
    passport.authenticate('fitbit', {
      // redirect is not working need to troubleshoot
      successRedirect: '/home',
      failureRedirect: '/login'
    })
  )
}
