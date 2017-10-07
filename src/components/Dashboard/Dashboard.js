import React from 'react'
import PropTypes from 'prop-types'

export const Dashboard = ({ dashboard }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Dashboard: {dashboard}</h2>
  </div>
)
Dashboard.propTypes = {
  dashboard: PropTypes.number.isRequired,
}

export default Dashboard
