/**
 * Content engine
 * Reponsible to hold all logic and
 * pipelines to grab information
 * @memberof effect-cms
 * @author Caio Alcantara - 2018
 */
import findAreaData from './components'

const getAreaData = (area) => findAreaData(area)

const contentEngine = {
  fetchCollection: (area, client) => getAreaData(area)
}

export default contentEngine
