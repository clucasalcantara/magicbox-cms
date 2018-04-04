/**
 * Content handler
 * Responsible to gather all information about
 * component strucuture and schema.
 */
import React, { Component } from 'react'

class MagicWrapper extends Component {
  render() {
    const { render: ComponentRender } = this.props

    return ComponentRender({
      data: { x: 1 },
    })
  }
}

export default MagicWrapper