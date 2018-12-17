/**
 * Content engine
 * Reponsible to hold all logic, methos and
 * pipelines to grab information about a client set of UI Elements or 
 * just a element, we consider content the whole page content and structure
 * including avaliable UI Sets for use.
 * @memberof effect-cms
 * @author Caio Alcantara - 2018
 */
import findClientUISet from './components'

const getClientUIContext = (client) => findClientUISet(client) || []

const getUIdata = (client, cKey, contentVersion) =>
  findClientUISet(client)
  .find(comp => comp.id === cKey)

const contentEngine = ({
  fetchCollection: (client) => getClientUIContext(client),
  fetchData: (client, cKey, contentVersion) => getUIdata(client, cKey, contentVersion)
})

export default contentEngine
