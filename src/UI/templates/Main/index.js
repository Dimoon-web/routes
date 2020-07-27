import React from 'react'
import { Link } from 'react-router-dom'

const MainTemplate = props => {
  return (
    <div>
      <div>
        <h1>Navigation (template 1)</h1>
        <ul>
          <li><Link to='/'>Main Page (u here)</Link></li>
          <li><Link to='/morePage'>Second Page</Link></li>
        </ul>
      </div>
      {props.children}
    </div>
  )
}

export default MainTemplate