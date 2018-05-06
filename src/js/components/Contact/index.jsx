import React, { Component } from 'react';
import { isEmpty } from 'ramda';
import isEmail from 'validator/lib/isEmail';
import { Element } from 'react-scroll';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';
import SectionHeader from 'components/SectionHeader';
import { Container, BtnContainer } from './style';

const action = 'https://form.run/api/v1/r/74mjwnqxgdxlle2tjvapcj0v';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        isChanged: false,
        value: ''
      },
      email: {
        isChanged: false,
        value: ''
      },
      title: {
        isChanged: false,
        value: ''
      },
      content: {
        isChanged: false,
        value: ''
      },
      isValid: false
    };
  }

  componentDidUpdate() {
    if (!this.state.isValid) {
      if (this.validate(this.state)) {
        return this.setState({ isValid: true });
      }
    } else if (this.state.isValid && this.validate(this.state)) {
      return false;
    } else {
      return this.setState({ isValid: false });
    }
  }

  validate = formData => {
    if (isEmpty(formData.name.value)) {
      return false;
    }
    if (!isEmail(formData.email.value)) {
      return false;
    }
    if (isEmpty(formData.title.value)) {
      return false;
    }
    if (isEmpty(formData.content.value)) {
      return false;
    }
    return true;
  };

  handleChange = (flag, text) => {
    this.setState(state => (state[flag].value = text));
  };

  validateForm = (flag, text) => {
    switch (flag) {
      case 'name':
        return !isEmail(text);
      default:
        return false;
    }
  };

  render() {
    const { isValid } = this.state;

    return (
      <Element name="contact">
        <Container>
          <form action={action} method="post">
            <SectionHeader title="Contact" />
            <Card style={{ padding: '1rem' }}>
              <TextField
                type="name"
                hintText="yamada tarou"
                floatingLabelText="name"
                floatingLabelFixed
                fullWidth
                onChange={e => this.handleChange('name', e.target.value)}
              />
              <br />
              <TextField
                hintText="email"
                floatingLabelText="xyz-placeholder@gmail.com"
                floatingLabelFixed
                fullWidth
                onChange={e => this.handleChange('email', e.target.value)}
              />
              <br />
              <TextField
                hintText="title"
                floatingLabelText="here is content"
                floatingLabelFixed
                fullWidth
                onChange={e => this.handleChange('title', e.target.value)}
              />
              <br />
              <TextField
                hintText="content"
                floatingLabelText="here is content"
                floatingLabelFixed
                fullWidth
                onChange={e => this.handleChange('content', e.target.value)}
              />
              <br />
              <BtnContainer>
                <RaisedButton
                  type="submit"
                  label="SUBMIT"
                  primary
                  fullWidth
                  disabled={!isValid}
                />
              </BtnContainer>
            </Card>
          </form>
        </Container>
      </Element>
    );
  }
}

export default Contact;
