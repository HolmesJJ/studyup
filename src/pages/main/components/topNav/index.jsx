import React, { useState } from 'react';

import './index.scss';
// import downPoint from '../../../../static/down-point.svg';
import earth from '../../../../static/earth.svg';
import exit from '../../../../static/exit.svg';
import logo from '../../../../static/logo.svg';
import menu from '../../../../static/menu.svg';

const TopNav = (props) => {
  const { main_wrap, competition_wrap, show_wrap, review_wrap, team_wrap, scrollIntoV } =
    props;
  const [isShow, setIsShow] = useState(false);
  const open = () => {
    setIsShow(true);
  };
  const close = () => {
    setIsShow(false);
  };
  return (
    <div className="top-nav">
      <img className="nav-logo" alt="" src={logo} />
      <div className="nav-item" onClick={() => scrollIntoV(main_wrap)}>过往成就</div>
      <div className="nav-item" onClick={() => scrollIntoV(competition_wrap)}>
        保牌竞赛
      </div>
      <div className="nav-item" onClick={() => scrollIntoV(show_wrap)}>
        精品课程
      </div>
      <div className="nav-item" onClick={() => scrollIntoV(review_wrap)}>
        用户评价
      </div>
      <div className="nav-item" onClick={() => scrollIntoV(team_wrap)}>
        团队介绍
      </div>
      <div className="nav-btn">
        <img className="img earth" alt="" src={earth} />
        <span>ZH</span>
        {/* <img className="img downPoint" src={downPoint} /> */}
      </div>
      <div className="menu" onClick={open}>
        <img src={menu} alt="" />
      </div>
      <div className={`popup ${isShow ? 'fadein' : 'fadeout'}`}>
        <div className="popup_content">
          <div className="top">
            <img className="popup_logo" src={logo} alt="" />
            <div className="popup_menu" onClick={close}>
              <img src={exit} alt="" />
            </div>
          </div>
          <div className="menu_list">
            <div className="list_item" onClick={() => scrollIntoV(main_wrap)}>
              <span className="arrow">&gt;</span>&nbsp;&nbsp;过往成就</div>
            <div
              className="list_item"
              onClick={() => scrollIntoV(competition_wrap)}
            >
              <span className="arrow">&gt;</span>&nbsp;&nbsp;保牌竞赛
            </div>
            <div className="list_item" onClick={() => scrollIntoV(show_wrap)}>
              <span className="arrow">&gt;</span>&nbsp;&nbsp;精品课程
            </div>
            <div className="list_item" onClick={() => scrollIntoV(review_wrap)}>
              <span className="arrow">&gt;</span>&nbsp;&nbsp;用户评价
            </div>
            <div className="list_item" onClick={() => scrollIntoV(team_wrap)}>
              <span className="arrow">&gt;</span>&nbsp;&nbsp;团队介绍
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
