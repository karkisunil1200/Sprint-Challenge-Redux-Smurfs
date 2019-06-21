import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addSmurfs} from '../../actions/index';

class AddSmurf extends Component {
  state = {
    creds: {
      name: '',
      age: '',
      height: ''
    }
  };

  handleChange = event => {
    this.setState({
      creds: {
        ...this.state.creds,
        [event.target.name]: event.target.value
      }
    });
  };

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurfs(this.state.creds);
    this.setState({
      creds: {
        name: '',
        age: '',
        height: ''
      }
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addSmurf}>
          <input
            type='text'
            placeholder='Enter name!'
            value={this.state.creds.name}
            name='name'
            onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder='Enter age!'
            value={this.state.creds.age}
            name='age'
            onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder='Enter height!'
            value={this.state.creds.height}
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

export default connect(
  mapStateToProps,
  {addSmurfs}
)(AddSmurf);
