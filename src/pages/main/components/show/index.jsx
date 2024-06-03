import React, { useState, useEffect } from 'react';

import './index.scss';
import rightPoint from '../../../../static/right-point.svg';

const Button = ({ link }) => {
  const open = ()=>{
    window.open(link, '_blank');
  };
  return (
    <div className="btn cur_point" onClick={open}>
      <span>了解更多</span>
      <img className="image" src={rightPoint} alt="" />
    </div>
  );
};

const Course = ({ item }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    import(`../../../../static/course/${item.image}`)
      .then(image => setImageSrc(image.default))
      .catch(err => console.error('Failed to load image', err));
  }, [item.image]);

  return (
    <div className="course">
      <img className="image" src={imageSrc} alt="" />
      <div className="content">
        <div className="title">{item.name}</div>
        <div className="price">
          <div className="price_num"><span className="unit">$</span>{item.price}</div>
          <Button link={item.link} />
        </div>
      </div>
    </div>
  );
};

const Title = () => {
  return <div className="show_title">课程展示</div>;
};

const Courses = ({ courses, isleft = true }) => {
  return courses.map((item, index) => {
    if (isleft && index % 2 === 0) {
      return <Course item={item} key={index} />;
    }
    if (!isleft && index % 2 !== 0) {
      return <Course item={item} key={index} />;
    }
    return null;
  });
};

const Show = ({ courses }) => {
  return (
    <div className="show">
      <div className="out_title">
        <Title />
      </div>
      <div className="course_list left_course">
        <div className="inset_title">
          <Title />
        </div>
        <Courses courses={courses} />
      </div>
      <div className="course_list right_course">
        <Courses courses={courses} isleft={false} />
      </div>
    </div>
  );
};

export default Show;
