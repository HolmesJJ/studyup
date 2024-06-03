import React from 'react';

import './index.scss';
import f0 from '../../../../static/frame/Frame(0).png';
import f1 from '../../../../static/frame/Frame(1).png';
import f2 from '../../../../static/frame/Frame(2).png';
import f3 from '../../../../static/frame/Frame(3).png';
import f4 from '../../../../static/frame/Frame(4).png';
import logo from '../../../../static/logo.svg';
import wechatLogo from '../../../../static/wechat-logo.svg';
import wechatPhone from '../../../../static/wechat-phone.svg';
import wechatQRcode from '../../../../static/wechat-qrcode.jpg';
import whatsappQRcode from '../../../../static/whatsapp-qrcode.jpg';

const Contact = () => {
  const open = (index) => {
    if (index === 0) {
      window.open('https://sg.linkedin.com/in/zhang-zhiyao-bluebell-b5971b165', '_blank');
    } else if (index === 1) {
      window.open('https://www.tiktok.com/@studyup.io', '_blank');
    } else if (index === 2) {
      window.open('https://www.xiaohongshu.com/user/profile/661bcfe100000000030321f9', '_blank');
    } else if (index === 3) {
      window.open('https://x.com/studyup_io', '_blank');
    } else if (index === 4) {
      window.open('https://www.instagram.com/studyup.io/', '_blank');
    } else {
      window.open('#', '_blank');
    }
  };
  return (
    <div className="contact">
      <img className="logo" src={logo} alt="" />
      <div className="name">studyup.io 学上科技</div>
      <div className="qrcode_group">
        <div className="qrcode_item">
          <img className="qrcode_img" src={wechatQRcode} alt="" />
          <div className="info">
            <img className="wechat_icon" src={wechatLogo} alt="" />
            <div className="info_name">微信</div>
          </div>
        </div>
        <div className="qrcode_item">
          <img className="qrcode_img" src={whatsappQRcode} alt="" />
          <div className="info">
            <img className="wechat_icon" src={wechatPhone} alt="" />
            <div className="info_name">WhatsApp</div>
          </div>
        </div>
      </div>
      <div className="brand_logo">
        <img
          src={f0}
          alt=""
          onClick={() => {
            open(0);
          }}
        />
        <img
          src={f1}
          alt=""
          onClick={() => {
            open(1);
          }}
        />
        <img
          src={f2}
          alt=""
          onClick={() => {
            open(2);
          }}
        />
        <img
          src={f3}
          alt=""
          onClick={() => {
            open(3);
          }}
        />
        <img
          src={f4}
          alt=""
          onClick={() => {
            open(4);
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
