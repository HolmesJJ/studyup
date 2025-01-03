import React, { useState, useEffect } from 'react';

import './index.scss';
import yhLight from '../../../../static/yh-light.png';
import yh from '../../../../static/yh.png';

const Card = (props) => {
  const { cls, item } = props;
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    import(`../../../../static/review/${item.avatar}`)
      .then(image => setImageSrc(image.default))
      .catch(err => console.error('Failed to load avatar', err));
  }, [item.avatar]);

  const [light, setLight] = useState(false);
  let className = 'team_card ';
  if (cls) {
    className += cls;
  }
  const handleMouseEnter = () => {
    setLight(true);
  };
  const handleMouseLeave = () => {
    setLight(false);
  };
  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {light ? (
        <img className="mark_img" src={yhLight} alt="" />
      ) : (
        <img className="mark_img" src={yh} alt="" />
      )}
      <div className="head">
        <img className="head_img" src={imageSrc} alt="" />
        <div className="info">
          <div className="name">
            {item.name}
            <div className="name_tag">主讲老师</div>
          </div>
          <div className="good_at">{item.title}</div>
        </div>
      </div>
      <ul className="desc" style={{ color: light ? ' #060C2C' : '#61686D' }}>
        {light
          ? item.contents.hover.map((li, index) => {
            return <li key={index}>{li}</li>;
          })
          : item.contents.normal.map((li, index) => {
            return <li key={index}>{li}</li>;
          })}
      </ul>
    </div>
  );
};

const Team = ({ team }) => {
  const cls = 'long';
  const light = true;
  return (
    <div className="team">
      <div className="team_title">
        <span>团队</span>介绍
      </div>
      <div className="card_list_wrap">
        <div className="card_list card_list_short">
          {team.sub_team.map((item, index) => {
            return <Card item={item} light={light} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
