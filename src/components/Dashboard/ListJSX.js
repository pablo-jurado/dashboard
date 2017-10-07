import React from 'react'
import PropTypes from 'prop-types'

const ListJSX = ({ dashboardItems, onClick, activeIndex }) => {

  const items = dashboardItems.map((item, i) => {
    const itemJSX = activeIndex === i
     ? <p><b><u>{item.label}</u></b></p>
     : <p>{item.label}</p>
    return (
      <h4 key={i} onClick={onClick(i)}>{itemJSX}</h4>
    )
  })  
  return (
    <div>
      { items }
    </div>  
  )
}

ListJSX.propTypes = {
  dashboardItems: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  activeIndex: PropTypes.number
}

export default ListJSX
