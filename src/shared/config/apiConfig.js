/**
 * apiConfig - Holds the API config vars
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
*/
module.exports = {
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3333' : 'https://localhost:8888',
  timeout: 6000,
}
