/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <Header />
          <p>Test test test</p>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
