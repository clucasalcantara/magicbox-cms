/**
 * @class Page Story
 * @extends Component
 * @memberof effect-cms
 * @author Caio Alcantara - 2018
 */

import React, { Component } from 'react'
// Packages
import ContentProvider from '../packages/content-provider'
// Engines
import { getPageData } from '../src/shared/engines/pages/pageProcessor'
// UI
import * as UIComponents from '../src/shared/components'

class Page extends Component {
  state = {
    config: {},
    data: {},
  }

  componentDidMount() {
    const { config } = this.props
    const { contentVersion } = this.state
    
    this.setState({
      contentVersion: config.contentVersion,  
      data: getPageData(config.id),
    })
  }
  
  _getUIComponent = (areaData = [], theme) => {
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
    const { data } = this.state

    return (
      // <ContentProvider
      //   area='Header'
      //   client='Iron Man'
      //   render={
      //     ({ componentState, templateConfig }) => {
      //       const { data: areaData, theme } = componentState

      //       return this._getUIComponent(areaData, theme)
      //     }
      //   }
      // />
      <span>{data.title} - Content Version: {this.state.contentVersion}</span>
    )
  }
}

export default Page
