/**
 * EasyAPI - Returns a watched instace of an sauce api
 * @author Caio Alcântara - 2018
 * @param {Object} - The api configuratiom
 * @memberof effect-cms
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
