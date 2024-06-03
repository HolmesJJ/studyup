import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel, Button } from 'antd';
import React, { createRef, useState, useEffect } from 'react';

import './index.scss';
import Stars from '../stars';

const Photo = (props) => {
  const { header } = props;
  const [cur, setCur] = useState(0);
  const [images, setImages] = useState([]);
  const carouselRef = createRef();

  useEffect(() => {
    Promise.all(header.map(item =>
      import(`../../../../static/group-photo/${item.image}`)
        .then(mod => mod.default)
    )).then(images => setImages(images))
      .catch(err => console.error('Failed to load images', err));
  }, [header]);

  const onChange = (currentSlide) => {
    if (currentSlide) {
      setCur(currentSlide);
    } else {
      setCur(0);
    }
  };

  return (
    <div className="photo">
      <div className="group-photo">
        <Button
          className='arrow-btn left-arrow-btn'
          onClick={() => {
            carouselRef.current.prev();
          }}
          icon={<LeftOutlined />}
        ></Button>
        <Carousel afterChange={onChange} autoplay infinite ref={carouselRef}>
          {images.map((src, index) => (
            <img className="Car_image" src={src} alt="" key={index} />
          ))}
        </Carousel>
        <Button
          className='arrow-btn right-arrow-btn'
          onClick={() => {
            carouselRef.current.next();
          }}
          icon={<RightOutlined />}
        ></Button>
      </div>
      <div className="modal">
        <div className="title">
          “{header[cur].title.name}&nbsp;<span>{header[cur].title.prize}</span>”
        </div>
        <div className="sub_title">{header[cur].sub_title}</div>
        <div className="level">
          {header[cur].level}档&emsp;难度:
          <Stars num={header[cur].difficulty} /> &emsp; 知名度:
          <Stars num={header[cur].popularity} />
        </div>
      </div>
    </div>
  );
};

export default Photo;
