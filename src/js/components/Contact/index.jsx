import React, { Component } from 'react';
import { zipObj, isEmpty } from 'ramda';
import isEmail from 'validator/lib/isEmail';
import { Element } from 'react-scroll';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';
import SectionHeader from 'components/SectionHeader';
import { Container, BtnContainer } from './style';

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
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('data', {prevProps, prevState, currentState: this.state })
    console.log('isValid', this.validate(this.state))
    if(!this.state.isValid) {
      if(this.validate(this.state)) {
        return this.setState(({isValid: true}))
      }
    } else if(this.state.isValid && this.validate(this.state)) {
      return false
    } else {
      return this.setState({isValid: false})
    }
    //const validateParam = () => console.log('validation')
    //console.log(this.validate(this.state))
    /*
    if(!this.state.isValid) {
      if(!this.validate(this.state)) {

      }
      this.setState({isValid: true})
    }
    */
  }

  validate = (formData) => {
    if(isEmpty(formData.name.value)) {
      return false
    }
    if(!isEmail(formData.email.value)) {
      return false
    }
    if(isEmpty(formData.title.value)) {
      return false
    }
    if(isEmpty(formData.content.value)) {
      return false
    }
    return true
  }

  handleChange = (flag, text) => {
    this.setState(state => state[flag].value = text)
  }

  validateForm = (flag, text) => {
    switch(flag) {
      case 'name': return !isEmail(text)
      default: return false
    }
  }

  render() {
    const { isValid, name, email, title, content } = this.state;

    return (
      <Element name="contact">
        <Container>
          <SectionHeader title="Contact" />
          <Card style={{ padding: '1rem' }}>
            <form
              action="https://form.run/api/v1/r/jtbMRyJTs0cSTI4phiqC"
              method="post"
            >
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
                  label="SUBMIT"
                  primary
                  fullWidth
                  disabled={!isValid}
                />
            </BtnContainer>
            </form>
          </Card>
        </Container>
      </Element>
    )
  }
}

export default Contact;
