const ora = require('ora')
const getWeather = require('../utils/weather')
const getLocation = require('../utils/location')
const f2c = require('../utils/f2c')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args.location || args.l || await getLocation()
    const weather = await getWeather(location)

    spinner.stop()

    console.log(`Current conditions in ${location}:`)
    console.log(`\t${f2c(weather.condition.temp)}° ${weather.condition.text}`)
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}
