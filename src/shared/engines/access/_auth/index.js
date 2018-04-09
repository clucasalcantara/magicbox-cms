/**
 * Auth Class
 * Login and token handling
 * @memberOf effect-cms/auth
 * Author: Caio Alcantara
 *
 **/
import auth0 from 'auth0-js'
// Import constants
import {
  domain,
  clientID,
  audience,
  redirectUri,
  responseType,
  scope
} from '../../../config/constants'

// Destructuring for webAuth
const { WebAuth } = auth0

class Auth {
  authInstance = new WebAuth({
    domain,
    clientID,
    redirectUri,
    audience,
    responseType,
    scope,
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

