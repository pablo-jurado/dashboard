import React from 'react'
import PropTypes from 'prop-types'
import Dashboard from 'components/Dashboard'

class DashboardRoute extends React.Component {

  static PropTypes = {
    dashboardVisitIncrement: PropTypes.func.isRequired,
    dashboard: PropTypes.object.isRequired,
    dashboardAddItem: PropTypes.func.isRequired,
    dashboardEditItem: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.dashboardVisitIncrement()
  }

  updateItem = ({ editItemIndex, label }) => {
    editItemIndex === null
      ? this.props.dashboardAddItem( { label } )
      : this.props.dashboardEditItem( { editItemIndex, label } )
  }

  render () {
    const { dashboard } = this.props 
    return (
      <Dashboard
        visitsCount={dashboard.visitsCount}
        dashboardItems={dashboard.dashboardItems}
        updateItem={this.updateItem}
      />
    )
  }
}

export default DashboardRoute
