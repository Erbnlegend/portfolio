const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.static('public'))

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/weather', async function (req, res) {
  const lat = req.query.lat
  const lon = req.query.lon
  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${lat},${lon}`

  try {
    const getWeather = await fetch(url)
    if (getWeather.ok) {
      const data = await getWeather.json()
      const result = data
      res.json(result)
    }
  } catch (error) {
    res.status(500)
    res.json(error)
  }
})

app.listen(5000, function () {
  console.log('Server is running on 5000')
})
