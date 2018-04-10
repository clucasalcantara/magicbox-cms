/**
 * ContentProvider
 * Responsible to gather all information about
 * component strucuture and schema.
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
 */
import React, { Component } from 'react'
import contentEngine from '../../src/shared/engines/content'

class ContentProvider extends Component {
  _getCollection = (area, client = null) => contentEngine.fetchCollection(area, client)

  render() {
    const { area, client, render: ComponentRender } = this.props

    const collectedData = this._getCollection(area)
    // const templateConfig = this._getTemplateProps(client)
    const templateConfig = { default: true }

    return ComponentRender({
      componentState: { 
        data: collectedData,
        templateConfig,
        theme: 'divine'
      },
    })
  }
}

export default ContentProvider