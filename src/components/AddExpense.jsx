import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class AddExpense extends Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Category"
          floatingLabelText="Category"
        />
        <br/>
        <TextField
          hintText="Subcategory"
          floatingLabelText="Subcategory"
        />
        <br/>
        <TextField
          hintText="Store"
          floatingLabelText="Store"
        />
        <br/>
        <TextField
          hintText="Amount"
          floatingLabelText="Amount"
        />
        <br/>
        <RaisedButton label="Add" secondary/>
      </div>
    );
  }
}

AddExpense.propTypes = {};

export default AddExpense;
