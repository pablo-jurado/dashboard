import React from 'react'
import PropTypes from 'prop-types'
import Dashboard from 'components/Dashboard'

class DashboardRoute extends React.Component {

  static PropTypes = {
    dashboardVisitIncrement: PropTypes.func.isRequired,
  }

  componentDidMount () {
    this.props.dashboardVisitIncrement()
  }

  render () {
    console.log('props', this.props)
    return (
      <Dashboard visitsCount={this.props.dashboard.visitsCount} dashboardItems={this.props.dashboard.dashboardItems} />
    )
  }
}

export default DashboardRoute
