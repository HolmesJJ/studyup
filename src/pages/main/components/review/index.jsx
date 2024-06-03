import React, { cloneElement, createRef, useEffect, useState } from 'react';

import './index.scss';
import angle from '../../../../static/angle.svg';
import test from '../../../../static/test.svg';

const ReviewItem = ({ item }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    import(`../../../../static/review/${item.avatar}`)
      .then(image => setImageSrc(image.default))
      .catch(err => console.error('Failed to load avatar', err));
  }, [item.avatar]);

  return (
    <div className="review_item">
      <img className="background" src={test} alt="" />
      <img className="revire_angle" src={angle} alt="" />
      <div className="content">
        <div className="head">
          <img className="head_img" src={imageSrc} alt="" />
          <div className="info">
            <div className="name">{item?.name}</div>
            <div className="title">{item?.title}</div>
          </div>
        </div>
        <div className="desc">{item.text}</div>
      </div>
    </div>
  );
};

let flag = 0;

const Review = ({ reviews }) => {
  const reviewListRef = createRef(null);

  const content = (
    <div className="content">
      {reviews.map((item, index) => {
        return <ReviewItem item={item} key={index} />;
      })}
    </div>
  );

  const clonedElement = (
    <>
      {content}
      {cloneElement(content, { key: 'cloned' })}
    </>
  );

  const [left, setLeft] = useState(0);
  const [isSkew, setIsSkew] = useState(true);

  useEffect(() => {
    const value = 0 - reviewListRef.current.offsetWidth / 2;
    flag = value;
  }, [reviewListRef]);

  const mouseEnter = () => {
    setIsSkew(false);
  };

  const mouseLeave = () => {
    setIsSkew(true);
  };

  setTimeout(() => {
    if (isSkew) {
      const val = left - 1;
      if (val <= flag) {
        setLeft(0);
      } else {
        setLeft(val);
      }
    }
  }, 16);

  return (
    <div className="review">
      <div className="review_title">
        过往用户
        <span>评价</span>
      </div>
      <div
        className="review_box"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <div
          className="review_list"
          style={{ left: left + 'px' }}
          ref={reviewListRef}
        >
          {clonedElement}
        </div>
      </div>
    </div>
  );
};

export default Review;
