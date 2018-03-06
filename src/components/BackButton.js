import React, {Component} from 'react';
import {HashRouter as Router} from 'react-router-dom';

class BackButton extends Component {
  static contextTypes = {
    router: () => true
  };

  render() {
    return (
      <button className="btn" onClick={this.context.router.history.goBack}>
        Back
      </button>
    );
  }
}

export default BackButton;
