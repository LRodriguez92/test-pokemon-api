const express = require("express")
const parser = require("body-parser")
const cors = require("cors")

// instantiate express
const app = express();

// Middleware
app.use(parser.json())
app.use(parser.urlencoded({extended: true}))

// const whitelist = ['http://localhost:3000']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions))

app.use(cors())

const routes = require('./routes/index')

app.use(routes)

app.listen(8080, () => console.log('They see me rollin...on port 8080...'))