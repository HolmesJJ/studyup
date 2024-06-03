import React, { useRef, useState, useEffect } from 'react';

import './index.scss';
import rightPoint from '../../../../static/right-point.svg';
import starIcon from '../../../../static/star-icon.svg';
import wavy from '../../../../static/wavy.svg';
import Stars from '../stars';

const Card = ({ item }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    import(`../../../../static/competition/${item.image}`)
      .then(image => setImageSrc(image.default))
      .catch(err => console.error('Failed to load image', err));
  }, [item.image]);

  const open = () => {
    window.open(item.link, '_blank');
  };

  return (
    <div className="card" onClick={open}>
      <div className="top_icon">
        {item.target}
        <img className="star_icon" src={starIcon} alt="" />
        <img className="wavy" src={wavy} alt="" />
      </div>
      <div className="price">
        <span className="unit">$</span>
        {item.price}
      </div>
      <div className="content">
        <img className="image" src={imageSrc} alt="" />
        <div className="desc">
          <div className="desc_title">{item.title}</div>
          <div className="date">
            {item.start_time} - {item.end_time}
          </div>
        </div>
      </div>
      <div className="status">
        <div className="left_status">
          {item.tags.map((tag) => {
            return (
              <div className="tag" key={tag}>
                {tag}
              </div>
            );
          })}
        </div>
        <div className="right_status">
          {item.status === '即将开始' ? (
            <div className="tag">{item.status}</div>
          ) : (
            <div className="tag active">{item.status}</div>
          )}
        </div>
      </div>
    </div>
  );
};

const Cards = ({ arr, showAll }) => {
  let isPhone = false,
    count = 0;
  if (window.innerWidth < 1024) {
    isPhone = true;
  }
  if (Array.isArray(arr)) {
    return (
      <>
        {arr.map((item, index) => {
          if (isPhone && count >= 3 && !showAll) {
            return null;
          }
          count++;
          return <Card key={index} item={item} />;
        })}
      </>
    );
  }
};

const Competition = ({ A, B }) => {
  const [isShowA, setIsShowA] = useState(false);
  const openA = () => {
    document.body.style.overflow = 'hidden';
    setIsShowA(true);
  };
  const colseA = (e) => {
    if (e.target.id === 'popup') {
      setIsShowA(false);
      document.body.style.overflow = 'auto';
    }
  };
  const [isShowB, setIsShowB] = useState(false);
  const openB = () => {
    document.body.style.overflow = 'hidden';
    setIsShowB(true);
  };
  const colseB = (e) => {
    if (e.target.id === 'popup') {
      setIsShowB(false);
      document.body.style.overflow = 'auto';
    }
  };

  const aCards = useRef(null);
  const aScrollBar = useRef(null);
  const [aLightTopVal, setALightTopVal] = useState(0);
  const handleAScroll = () => {
    const difVal = aCards.current.scrollHeight - aCards.current.clientHeight;
    const per = aCards.current.scrollTop / difVal;
    const topVal = aScrollBar.current.clientHeight * 0.8 * per;
    setALightTopVal(topVal);
  };

  const bCards = useRef(null);
  const bScrollBar = useRef(null);
  const [bLightTopVal, setBLightTopVal] = useState(0);
  const handleBScroll = () => {
    const difVal = bCards.current.scrollHeight - bCards.current.clientHeight;
    const per = bCards.current.scrollTop / difVal;
    const topVal = bScrollBar.current.clientHeight * 0.8 * per;
    setBLightTopVal(topVal);
  };

  const aPopCards = useRef(null);
  const aPopScrollBar = useRef(null);
  const [aPopLightTopVal, setAPopLightTopVal] = useState(0);
  const handleAPopScroll = () => {
    const difVal =
      aPopCards.current.scrollHeight - aPopCards.current.clientHeight;
    const per = aPopCards.current.scrollTop / difVal;
    const topVal = aPopScrollBar.current.clientHeight * 0.8 * per;
    setAPopLightTopVal(topVal);
  };

  const bPopCards = useRef(null);
  const bPopScrollBar = useRef(null);
  const [bPopLightTopVal, setBPopLightTopVal] = useState(0);
  const handleBPopScroll = () => {
    const difVal =
      bPopCards.current.scrollHeight - bPopCards.current.clientHeight;
    const per = bPopCards.current.scrollTop / difVal;
    const topVal = bPopScrollBar.current.clientHeight * 0.8 * per;
    setBPopLightTopVal(topVal);
  };

  return (
    <div className="competition">
      <div className="title">保牌竞赛级别展示</div>
      <div className="level">
        <div className="level_item level_A">
          <div className="level_item_title">
            <div className="num">01</div>
            <div className="text">A档</div>
          </div>
          <div className="level_star">
            <div className="starts">
              难度:
              <Stars num={5} />
            </div>
            <div className="starts">
              知名度:
              <Stars num={5} />
            </div>
          </div>
          <div className="class_list" onScroll={handleAScroll} ref={aCards}>
            <div className="scroll_bar" ref={aScrollBar}>
              <div className="light" style={{ top: aLightTopVal }}></div>
            </div>
            <Cards arr={A} />
            <div className="more" onClick={openA}>
              查看更多
              <img src={rightPoint} alt="" />
            </div>
          </div>
          <div
            className="com_popup"
            style={{ display: isShowA ? 'flex' : 'none' }}
            onClick={colseA}
            id="popup"
          >
            <div className="scroll_bar" ref={aPopScrollBar}>
              <div className="light" style={{ top: aPopLightTopVal }}></div>
            </div>
            <div
              className="com_popup_content"
              onScroll={handleAPopScroll}
              ref={aPopCards}
            >
              <Cards arr={A} showAll={true} />
            </div>
          </div>
        </div>
        <div className="level_item level_B">
          <div className="level_item_title">
            <div className="num">02</div>
            <div className="text">B档</div>
          </div>
          <div className="level_star">
            <div className="starts">
              难度:
              <Stars num={3} />
            </div>
            <div className="starts">
              知名度:
              <Stars num={4} />
            </div>
          </div>
          <div className="class_list" onScroll={handleBScroll} ref={bCards}>
            <div className="scroll_bar" ref={bScrollBar}>
              <div className="light" style={{ top: bLightTopVal }}></div>
            </div>
            <Cards arr={B} />
            <div className="more" onClick={openB}>
              查看更多
              <img src={rightPoint} alt="" />
            </div>
          </div>
          <div
            className="com_popup"
            style={{ display: isShowB ? 'flex' : 'none' }}
            onClick={colseB}
            id="popup"
          >
            <div className="scroll_bar" ref={bPopScrollBar}>
              <div className="light" style={{ top: bPopLightTopVal }}></div>
            </div>
            <div
              className="com_popup_content"
              onScroll={handleBPopScroll}
              ref={bPopCards}
            >
              <Cards arr={B} showAll={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competition;
