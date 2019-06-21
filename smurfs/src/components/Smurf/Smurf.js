import React, {Component} from 'react';

class Smurf extends Component {
  render(props) {
    return (
      <div>
        <h2>{props.smurf.name}</h2>
      </div>
    );
  }
}

export default Smurf;
