import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { red500, yellow500, blue500 } from 'material-ui/styles/colors';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  container: {
    textAlign: 'center',
    bottom: 0,
    fontSize: '10px',
  },
  text: {
    fontSize: '12px',
  },
  icon: {
    marginRight: 24,
  },
};

export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  render() {
    return (
      <Toolbar className="footer" style={styles.container}>
        <ToolbarGroup>
          <ToolbarTitle
            text="Copyright 2016"
            style={styles.text}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <IconButton
            iconClassName="muidocs-icon-custom-github"
            tooltip="GitHub"
            href="http://github.com/artarmstrong"
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

// const Footer = () => (
//   <AppBar title="ArtArmstrong.com" style={styles.container} />
// );
//
// export default Footer;
