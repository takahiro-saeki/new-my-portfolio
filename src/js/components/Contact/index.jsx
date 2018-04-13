import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';
import SectionHeader from 'components/SectionHeader'
import Container from './style';

const Contact = () => (
  <Container>
    <SectionHeader title="Contact" />
  <Card style={{padding: '1rem'}}>
    <form action="https://form.run/api/v1/r/jtbMRyJTs0cSTI4phiqC" method="post">
    <TextField
      type="name"
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
      hintText="content"
      floatingLabelText="here is content"
      floatingLabelFixed
      fullWidth
    /><br />
    <RaisedButton label="Primary" primary />
</form>
</Card>
  </Container>
);

export default Contact;
