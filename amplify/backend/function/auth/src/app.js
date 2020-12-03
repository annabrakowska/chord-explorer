const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport')
const session = require('express-session')

const auth = require('./auth')
const social = require('./social')

const app = express()
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(bodyParser.json())

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET, POST"],
    credentials: true

}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(passport.initialize())
app.use(session({
    key: 'userId',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
        httpOnly: true
    }
}))

app.get('/authorize', (req, res) => {
    res.json({ message: 'Welcome to my API' })
})

app.use('/authorize', auth)
app.use('/authorize/social', social)

app.listen(3000, console.log("App started"))

module.exports = app;