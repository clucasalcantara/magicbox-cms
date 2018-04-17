/**
 * ContentProvider
 * Responsible to gather all information about
 * component strucuture and schema.
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
 */
import React, { Component } from 'react'
import contentEngine from '../../src/shared/engines/content'
import { UIElementNotFound } from '../../src/shared/engines/utils'

class ContentProvider extends Component { 
  _getUIContext = (client = null, desiredComponent) => contentEngine.fetchCollection(client, desiredComponent)

  render() {
    const { client, render: ComponentRender, desiredComponent: cKey } = this.props
    const UIContext = this._getUIContext(client, cKey)
    let cVersion = null
    // Updating content version
    try {
      const { contentVersion: cVersion } = UIContext
    } catch(error) {
      throw new Error(UIElementNotFound(cKey, error))
    }
    const templateConfig = { default: true }    
    const data = contentEngine.fetchData(cKey, cVersion)

    return ComponentRender({
      effectContext: {
        UIContext,
        data,
      },
      template: templateConfig,
    })
  }
}

export default ContentProvider