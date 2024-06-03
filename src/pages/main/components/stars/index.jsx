import React from 'react';

import star from '../../../../static/star.png';
import './index.scss';

const Stars = ({ num }) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(<img className="star" alt="" src={star} key={i} />);
  }
  return <>{result}</>;
};

export default Stars;
