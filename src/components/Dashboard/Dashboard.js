import React from 'react'
import PropTypes from 'prop-types'
import ListJSX from './ListJSX'

export const Dashboard = ({ visitsCount, dashboardItems }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Dashboard: {visitsCount}</h2>
    <ListJSX dashboardItems={dashboardItems} />
  </div>
)
Dashboard.propTypes = {
  visitsCount: PropTypes.number.isRequired,
  dashboardItems: PropTypes.array.isRequired
}

export default Dashboard
