/**
 * @class QueryComponent
 * @extends Component
 * @memberof effect-cms
 * @author Caio Alcantara - 2018
 */

import React, { Component } from 'react'

import ContentProvider from '../packages/content-provider'
import ThemeProvider from '../packages/template-handler/index'
import * as UIComponents from '../src/shared/components'

import { ERROR_MESSAGES } from '../src/shared/config/constants'

class QueryComponent extends Component {
  render() {
    const {
      config,
      desiredComponent,
      client: activeClient,
      type: receivedType
    } = this.props

    return (
      <ContentProvider
        desiredComponent={desiredComponent}
        client={activeClient}
        type={receivedType}
        render={
          ({ effectContext, template }) => {
            const { UIContext, data } = effectContext
            const { theme } = UIContext
            const componentData = UIContext.find(element => element.id === desiredComponent)
            const { componentKey } = componentData || {}
            const UIElement = UIComponents[componentKey]
            
            if (!componentData || !UIElement) {
              const error = new Error(ERROR_MESSAGES.componentNotFound(desiredComponent))

              throw error
            }

            return (
              <UIElement
                {...ThemeProvider.injectTheme(theme)}
                content={data.dummyContent}
              />
            )
          }
        }
      />
    )
  }
}

export default QueryComponent
