import React, { Component } from 'react'

import ContentProvider from '../packages/content-provider'
import * as UIComponents from '../src/shared/components'

class QueryComponent extends Component {
  _getUIComponent = (areaData, theme) => {
    const componentData = areaData
      .filter(areaContent => areaContent.theme === theme)[0]
    const UIComponent = UIComponents[componentData.componentKey]

    return (
      <UIComponent
        {...theme}
        {...componentData} />
    )
  }

  render() {
    const { config } = this.props
    const { templateConfig } = config

    return (
      <ContentProvider
        area='Header'
        client='Iron Man'
        render={
          ({ componentState, templateConfig }) => {
            const { data: areaData, theme } = componentState

            return this._getUIComponent(areaData, theme)
          }
        }
      />
    )
  }
}

export default QueryComponent
