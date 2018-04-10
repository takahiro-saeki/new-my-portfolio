import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Contact = () => (
  <div>
    <TextField
          hintText="yamada tarou"
          floatingLabelText="name"
          floatingLabelFixed={true}
        />
        <TextField
          hintText="email"
          floatingLabelText="xyz-placeholder@gmail.com"
          floatingLabelFixed={true}
        />
        <TextField
          hintText="subject"
          floatingLabelText="something which you want to ask me."
          floatingLabelFixed={true}
        />
        <TextField
          hintText="content"
          floatingLabelText="here is content"
          floatingLabelFixed={true}
        />
      <RaisedButton label="Primary" primary={true} fullWidth={true} />
  </div>
)

export default Contact;
