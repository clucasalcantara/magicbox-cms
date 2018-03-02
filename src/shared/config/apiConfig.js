/**
 * apiConfig - Holds the API config vars
 * Author: Caio Alcantara - 2018
 * @memberOf magicbox-core/isomorphic
*/
module.exports = {
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3333' : 'https://localhost:8888',
  timeout: 6000,
}
