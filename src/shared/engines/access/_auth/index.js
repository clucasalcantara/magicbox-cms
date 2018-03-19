/**
 * Auth Class
 * Login and token handling
 * @memberOf magicbox-cms/auth
 * Author: Caio Alcantara
 *
 **/
import auth0 from 'auth0-js'

const { WebAuth } = auth0

class Auth {
  authInstance = new WebAuth({
    domain: 'magicbox.auth0.com',
    clientID: '0onV-Ii40zaMvAQ5Xl0SR8R5aGmMmtjP',
    redirectUri: 'https://localhost:3333',
    audience: 'https://magicbox.auth0.com/api/v2/',
    responseType: 'token id_token',
    scope: 'openid'
  })

  /**
  * Authorize method
  * @param {void} -
  * @returns Auth.authorize() - Returns the login page
  *
  **/
  authorize() {
    this.authInstance.authorize()
  }
}

export default Auth

