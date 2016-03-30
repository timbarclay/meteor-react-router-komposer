import React from 'react';
import { IndexLink } from 'react-router';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <IndexLink to="/"><h1>Meteor, React, React Router, React Komposer</h1></IndexLink>
        <Link to="/list">Items</Link>
        
        {this.props.children}
      </div>
    )
  }
})