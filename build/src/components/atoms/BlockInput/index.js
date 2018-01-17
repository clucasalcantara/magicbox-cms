/*eslint-disable no-useless-escape*/

import React from 'react'

const BlockInput = ({ type, id, label, required, pattern='.*\S.*' }) => (
  <div className="field">
    <label htmlFor={id} className="label">{label}</label>
    <input
      type={type}
      id={id}
      className={"input"}
      required={required}
      pattern={pattern}
    />
  </div>
)

export default BlockInput
