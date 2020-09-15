import React from 'react';

const Repository = ({ match }) => {
  return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>
}

export default Repository;
