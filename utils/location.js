const axios = require('axios')

// figure out by IP-Adress where you are; use either of these:
//
// Ipdata.co: IP Geolocation and Threat Data API (1.500 free requests per day)
// ipstack.com: Locate and identify website visitors by IP address (10.000 free requests per month)
//
// going with ipdata.co, because this was the original service used by timber.io

module.exports = async () => {
  let api_key = process.env.IPDATA_API_KEY

  const results = await axios({
    method: 'get',
    url: `https://api.ipdata.co/?api-key=${api_key}`
  })

  const { city, region } = results.data
  // console.log(`DEBUG: ${city}, ${region}`)
  if (!city) {
    city = 'Hamburg'
    region = 'Hamburg'
    console.log(`Unable to determine city and region, defaulting to ${city}, ${region}`)
  }
  return `${city}, ${region}`
}
