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

const getClientUIContext = (client, cKey = null) => {
  if (cKey) {
    return findClientUISet(client)
      .filter(comp => comp.id === cKey)
  }
  
  return findClientUISet(client)
}

const getUIdata = (cKey, contentVersion) => {
  return {
    content: 'Dummy'
  }
}

const contentEngine = ({
  fetchCollection: (client, cKey) => getClientUIContext(client, cKey)[0],
  fetchData: (cKey, contentVersion) => getUIdata(cKey, contentVersion)
})

export default contentEngine
