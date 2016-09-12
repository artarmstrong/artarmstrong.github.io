import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  container: {
    textAlign: 'center',
    bottom: 0,
    position: 'fixed',
  },
};

const Footer = () => (
  <AppBar title="ArtArmstrong.com" style={styles.container} />
);

export default Footer;
