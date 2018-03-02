/**
 * EasyAPI - Returns a watched instace of an sauce api
 * Author: Caio Alcântara - 2018
 * @param {Object} - The api configuratiom
 * @memberOf magicbox-core/isomorphic
 */
import { apiConfig, constants } from '../config'
import { create } from 'apisauce'

export const EasyAPI = ({
    api: () => create({
      baseURL: apiConfig.baseURL,
      timeout: apiConfig.timeout,
    }),
    requestMonitor: (res) => console.info(`Api traffic with status: ${res.status} Full response =>`, res),
})(apiConfig)
