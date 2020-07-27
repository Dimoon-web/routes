import React from 'react'

const TwoTemplate = props => {
  return (
    <div>
      <h1>There is no menu here (template 2)</h1>
      {props.children}
    </div>
  )
}

export default TwoTemplate