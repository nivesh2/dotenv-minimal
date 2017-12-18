/**
 * Loads environment variables from .env file
 * check for the missing environment variables at start
 * throw exception if .env file doesnot exist
 * @returns env
 */
function readFromEnvFile() {
  try {
    // .env file should be in root directory
    const data = require('fs').readFileSync(require('path').join(__dirname, '../../.env'), 'utf8')

    const env = {}
    data.split('\n').filter((v) => {
      return v !== ''
    }).filter((v) => {
      return v.indexOf('#') === -1
    }).forEach((v) => {
      const splitPosition = v.indexOf('=')
      if (splitPosition === -1) {
        return
      }
      // only first '=' will be splitted
      const key = v.slice(0, splitPosition).trim()
      const value = v.slice(splitPosition + 1).trim()
      env[key] = value
    })
    return env
  } catch (err) {
    throw err
  }
}

// it only supports spilitting using comma
function splitMultipleValues(envObject) {
  try {
    const data = Object.keys(envObject)
    return data.reduce((p, v) => {
      p[v] = envObject[v]
      if (envObject[v].indexOf(',') !== -1) {
        p[v] = envObject[v].split(',')
      }
      return p
    }, {})
  } catch (err) {
    throw err
  }
}

module.exports = (() => {
  try {
    const temp = splitMultipleValues(readFromEnvFile())
    process.env = temp
    return temp
  } catch (err) {
    throw err
  }
})()