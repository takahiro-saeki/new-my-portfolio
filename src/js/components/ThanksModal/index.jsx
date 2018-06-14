import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class DialogExampleSimple extends React.Component {
  static defaultProps = {
    isOpen: false
  }
  render() {
    const actions = [
      <FlatButton label="Cancel" primary onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onClick={this.handleClose}
      />
    ];



    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={location.search.includes('thanks')}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React
          objects.
        </Dialog>
      </div>
    );
  }
}
