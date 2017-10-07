import React from 'react'
import PropTypes from 'prop-types'

const ListJSX = ({ dashboardItems }) => {

  const items = dashboardItems.map((item, i) => {
    return (
      <h4 key={i}>{item.label}</h4>
    )
  })  
  return (
    <div>
      { items }
    </div>  
  )
}

ListJSX.propTypes = {
  dashboardItems: PropTypes.array.isRequired
}

export default ListJSX
