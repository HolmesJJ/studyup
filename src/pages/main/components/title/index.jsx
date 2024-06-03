import React from 'react';

import './index.scss';
import brand from '../../../../static/brand.svg';
import rightPoint from '../../../../static/right-point.svg';

const Title = (props) => {
  const { contact_wrap, scrollIntoV } =
    props;
  return (
    <div className="title">
      <div className="title_text1">帮助每个莘莘学子实现名校梦</div>
      <div className="title_text2">名师指导，成就非凡</div>
      <div className="btn" onClick={() => scrollIntoV(contact_wrap)}>
        了解更多
        <img src={rightPoint} alt="" />
      </div>
      <div className="brand">
        <img src={brand} alt="" />
      </div>
    </div>
  );
};

export default Title;
