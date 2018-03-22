const MongoClient = require('mongodb')

const connectionsCache = {}

async function mongodb() {
  const URL = `mongodb://localhost:27017` // FIXME
  const DB_NAME = 'SEM_NOME' // FIXME

  if (!connectionsCache[URL]) {
    connectionsCache[URL] = new Promise(function(resolve, reject) {
      MongoClient.connect(URL, (error, connection) => {
        if (error) {
          console.log(error)
          reject(error)
        }
        resolve(connection.db(DB_NAME))
      })
    })
  }

  return connectionsCache[URL]
}

exports.connector = mongodb
