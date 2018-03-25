import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import NavBar from 'components/NavBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        title: 'SKILL'
      },
      {
        title: 'WORK'
      },
      {
        title: 'TIMELINE'
      },
      {
        title: 'CONTACT'
      }
    ]
  }

  render() {
    return (
      <div>
        <NavBar list={this.items} />
        <Grid>App</Grid>
      </div>
    )
  }
}
