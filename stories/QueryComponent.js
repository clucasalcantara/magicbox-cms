import React, { Component } from 'react'

import MagicWrapper from '../packages/magic-wrapper'
import * as UIComponents from '../src/shared/components'

class QueryComponent extends Component {
  
  _getUIElement = (templateConfig) => {
    const { configuredComp, theme: configuredTheme } = templateConfig
    const UIElement = UIComponents[`${configuredComp}`]
    
    console.log(UIComponents)
    console.log(configuredComp)
    console.log(UIElement)  

    return (
      <UIElement 
        theme={configuredTheme}
      />
    )
  }

  render() {
    const { config } = this.props
    const { templateConfig } = config
    
    const UIElement = this._getUIElement(templateConfig)
    
    return (
      // <MagicWrapper
      //   config={config}
      //   render={({ data: content, context: scope}) => (
      //     <UIElement
      //       data={content}
      //       context={scope}
      //     />
      //   )}
      // />
      <span>hello</span>
    )
  }
}

export default QueryComponent
