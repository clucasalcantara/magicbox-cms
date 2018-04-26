/**
 * ContentProvider
 * Responsible to gather all information about
 * component strucuture and schema.
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Engines
import contentEngine from '../../src/shared/engines/content'
// Utils
import { UIElementNotFound } from '../../src/shared/engines/utils/errors'

class ContentProvider extends Component {
  static propTypes = {
    client: PropTypes.object,
    desiredComponent: PropTypes.string,
  }

  static defaultProps = {
    client: {
      id: '132bcbaf871261',
      name: 'Effect Anonymous',
      roles: [
        'sysadmin',
        'Administrator',
        'Content'
      ]
    },
    desiredComponent: 'RegularText',
  }

  render() {
    const { client, render: ComponentRender, desiredComponent: cKey, type: cType } = this.props
    const UIContext = this._getUIContext(client, cKey)
    let cVersion = null
    // Updating content version
    try {
      const { contentVersion: cVersion } = UIContext
    } catch(error) {
      throw new Error(UIElementNotFound(cKey, error))
    }
    const templateConfig = { default: true }    
    const data = cType === 'static' ? null : contentEngine.fetchData(cKey, cVersion)

    return ComponentRender({
      effectContext: {
        UIContext,
        data,
      },
      template: templateConfig,
    })
  }

  _getUIContext = (client = null, desiredComponent) => contentEngine.fetchCollection(client, desiredComponent)
}

export default ContentProvider