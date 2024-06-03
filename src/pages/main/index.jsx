import React, { useRef } from 'react';

import './index.scss';
import Competition from './components/competition';
import Contact from './components/contact';
import Footer from './components/footer';
import Photo from './components/photo';
import Review from './components/review';
import Show from './components/show';
import Team from './components/team';
import Title from './components/title';
import TopNav from './components/topNav';
import main from '../../config/main.json';

const Main = () => {
  const photoProps = { header: main.headers };
  const competitionProps = { A: main.A, B: main.B };
  const teamProps = { team: main.team };
  const reviewProps = { reviews: main.reviews };
  const showProps = { courses: main.courses };

  const main_wrap = useRef(null);
  const competition_wrap = useRef(null);
  const show_wrap = useRef(null);
  const review_wrap = useRef(null);
  const team_wrap = useRef(null);
  const contact_wrap = useRef(null);

  const scrollIntoV = (view) => {
    if (view.current) {
      view.current.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
      });
    }
  };

  const navProps = {
    main_wrap,
    competition_wrap,
    show_wrap,
    review_wrap,
    team_wrap,
    contact_wrap,
    scrollIntoV,
  };

  const titleProps = {
    contact_wrap,
    scrollIntoV,
  };

  return (
    <div className="main_wrap" ref={main_wrap}>
      <div className="top-nav_wrap wrap">
        <TopNav {...navProps}/>
      </div>
      <div className="title_wrap wrap">
        <Title {...titleProps} />
      </div>
      <div className="photo_wrap wrap">
        <Photo {...photoProps} />
      </div>
      <div className="competition_wrap wrap" ref={competition_wrap}>
        <Competition {...competitionProps} />
      </div>
      <div className="show_wrap wrap" ref={show_wrap}>
        <Show {...showProps} />
      </div>
      <div className="review_wrap wrap" ref={review_wrap}>
        <Review {...reviewProps} />
      </div>
      <div className="team_wrap wrap" ref={team_wrap}>
        <Team {...teamProps} />
      </div>
      <div className="contact_wrap wrap" ref={contact_wrap}>
        <Contact />
      </div>
      <div className="footer_wrap wrap">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
