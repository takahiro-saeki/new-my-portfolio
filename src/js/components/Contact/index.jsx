import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';
import Container from './style';

const Contact = () => (
  <Container>
    <h2>Contact</h2>
  <Card style={{padding: '1rem'}}>
    <TextField
      hintText="yamada tarou"
      floatingLabelText="name"
      floatingLabelFixed
      fullWidth
    /><br />
    <TextField
      hintText="email"
      floatingLabelText="xyz-placeholder@gmail.com"
      floatingLabelFixed
      fullWidth
    /><br />
    <TextField
      hintText="subject"
      floatingLabelText="something which you want to ask me."
      floatingLabelFixed
      fullWidth
    /><br />
    <TextField
      hintText="content"
      floatingLabelText="here is content"
      floatingLabelFixed
      fullWidth
    /><br />
    <RaisedButton label="Primary" primary fullWidth />
</Card>
  </Container>
);

export default Contact;
