import React from 'react'
import PropTypes from 'prop-types'
import Dashboard from 'components/Dashboard'

class DashboardRoute extends React.Component {

  static PropTypes = {
    dashboardVisitIncrement: PropTypes.func.isRequired,
    dashboard: PropTypes.number.isRequired    
  }

  componentDidMount () {
    this.props.dashboardVisitIncrement()
  }

  render () {
    return (
      <Dashboard dashboard={this.props.dashboard} />
    )
  }
}

export default DashboardRoute
