import React from 'react'

import templateHandler from '../packages/template-handler'

export class TemplateExample extends React.Component {
  render() {
    return (
      <div className={'TemplateExample__wrapper'}>
        <h1>TemplateExample</h1>
        <hr/>
        {templateHandler(this.props.content)}
      </div>
    )
  }
}
