import React, { Component } from 'react';
import Entry from './Entry';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import './App.css';

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px 100px',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
      </div>
    );
  }
}

export default App;
