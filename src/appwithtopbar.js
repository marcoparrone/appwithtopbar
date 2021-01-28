// appwithtopbar.js - App container element with material TopAppBar react component.

import React from 'react';

import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';

import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

export default class AppWithTopBar extends React.Component {
  render() {
    let id = this.props.id ? this.props.id : 0;
    let key = 0;
    return React.createElement('div', { ref: this.props.refprop, lang: this.props.lang },
      [React.createElement(TopAppBar, { key: 'TopAppBar-' + id },
        React.createElement(TopAppBarRow, { key: 'TopAppBarRow-' + id },
          [React.createElement(TopAppBarSection, { align: 'start', key: 'TopAppBarSection-start-' + id },
            React.createElement(TopAppBarTitle, { key: 'TopAppBarTitle-' + id }, this.props.appname)),
          React.createElement(TopAppBarSection, { align: 'end', role: 'toolbar', key: 'TopAppBarSection-end-' + id },
            this.props.icons.map((icon) => React.createElement(TopAppBarIcon, { key: 'TopAppBarIcon-' + (key++), actionItem: true, tabIndex: 0 },
              React.createElement(MaterialIcon, { key: 'MaterialIcon-' + key, 'aria-label': icon.label, hasRipple: true, icon: icon.icon, onClick: icon.callback }))))])),
      React.createElement(TopAppBarFixedAdjust, { key: 'TopAppBarFixedAdjust-' + id }, this.props.children)]);
  }
}
