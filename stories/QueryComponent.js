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

class QueryComponent extends Component {
  render() {
    const {
      config,
      componentKey,
      client: activeClient,
      type: receivedType
    } = this.props

    return (
      <ContentProvider
        desiredComponent={componentKey}
        client={activeClient}
        type={receivedType}
        render={
          ({ effectContext, template }) => {
            const { UIContext, data } = effectContext
            const { componentKey, theme } = UIContext
            const UIElement = UIComponents[componentKey]

            return (
              <UIElement
                {...ThemeProvider.injectTheme(theme)}
                content={data.content}
              />
            )
          }
        }
      />
    )
  }
}

export default QueryComponent
