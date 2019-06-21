import React from 'react';
import {getSmurfs} from '../../actions/index';
import {connect} from 'react-redux';
import Smurf from '../Smurf/Smurf';
import AddSmurf from '../AddSmurf/AddSmurf';

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(this.props.smurfs);
    return (
      <div>
        <h2>Smurfs List</h2>
        {this.props.smurfs.map(smurf => {
          return <Smurf smurf={smurf} />;
          console.log('This is smurfList', smurf);
        })}
        <AddSmurf />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.smurfs);
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  {getSmurfs}
)(SmurfList);
