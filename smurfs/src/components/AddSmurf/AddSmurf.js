import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddSmurf extends Component {
  state = {
    creds: {
      name: '',
      age: '',
      height: ''
    }
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addSmurf = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addSmurf}>
          <input
            type='text'
            placeholder='Enter name!'
            value={this.state.name}
            name='name'
            onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder='Enter name!'
            value={this.state.age}
            name='age'
            onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder='Enter name!'
            value={this.state.height}
            name='height'
            onChange={this.handleChange}
          />
          <button> Add Me</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default AddSmurf;
