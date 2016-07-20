import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppListItem from './app_list_item';

class AppList extends Component {
  renderApp(appData){
    console.log(appData.length);
    return(
      <tr>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
      </tr>
    )
  }

  render() {
    return(
    	<table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Rating</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {this.props.app.map(this.renderApp)}
          </tbody>
    	</table>
    );
  }
}

function mapStateToProps(state){
  return { app: state.app };
}

export default connect(mapStateToProps)(AppList);