import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Contact = () => (
  <div>
    <TextField
      hintText="yamada tarou"
      floatingLabelText="name"
      floatingLabelFixed
    />
    <TextField
      hintText="email"
      floatingLabelText="xyz-placeholder@gmail.com"
      floatingLabelFixed
    />
    <TextField
      hintText="subject"
      floatingLabelText="something which you want to ask me."
      floatingLabelFixed
    />
    <TextField
      hintText="content"
      floatingLabelText="here is content"
      floatingLabelFixed
    />
    <RaisedButton label="Primary" primary fullWidth />
  </div>
);

export default Contact;
