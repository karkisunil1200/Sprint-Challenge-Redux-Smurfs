import React from 'react';
import {getSmurfs} from '../../actions/index';
import {connect} from 'react-redux';
import Smurf from '../Smurf/Smurf';
import AddSmurf from '../AddSmurf/AddSmurf';

class SmurfList extends React.Component {
  render() {
    console.log(this.props.smurfs);
    return (
      <div>
        <h2>Smufs List</h2>
        {this.props.smurfs.map(smurf => {
          return <Smurf {...smurf} />;
        })}
        <AddSmurf />
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
  {getSmurfs}
)(SmurfList);
