import React, { Component, PropTypes } from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';

class Dashboard extends Component {
  render() {
    return (
      <h1>dashboard</h1>
    );
  }
}

Dashboard.propTypes = {};

export default Dashboard;
//
//<Toolbar>
//  <ToolbarGroup firstChild={true} float="left">
//    <DropDownMenu value={3}>
//      <MenuItem value={1} primaryText="All Broadcasts"/>
//      <MenuItem value={2} primaryText="All Voice"/>
//      <MenuItem value={3} primaryText="All Text"/>
//      <MenuItem value={4} primaryText="Complete Voice"/>
//      <MenuItem value={5} primaryText="Complete Text"/>
//      <MenuItem value={6} primaryText="Active Voice"/>
//      <MenuItem value={7} primaryText="Active Text"/>
//    </DropDownMenu>
//  </ToolbarGroup>
//</Toolbar>
