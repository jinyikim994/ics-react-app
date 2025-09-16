import React from "react";

// 링크 연동
import { Link } from 'react-router-dom';

// 컴포넌트
import Header from '../layout/Header'; 

// 이미지
import thumbnail from '../../assets/images/resize/artist/stylist/thumnail.webp';

import img1 from '../../assets/images/resize/artist/stylist/1.webp';
import img2 from '../../assets/images/resize/artist/stylist/2.webp';
import img3 from '../../assets/images/resize/artist/stylist/3.webp';
import img4 from '../../assets/images/resize/artist/stylist/4.webp';
import img5 from '../../assets/images/resize/artist/stylist/5.webp';
import img6 from '../../assets/images/resize/artist/stylist/6.webp';
import img7 from '../../assets/images/resize/artist/stylist/7.webp';
import img8 from '../../assets/images/resize/artist/stylist/8.webp';
import img9 from '../../assets/images/resize/artist/stylist/9.webp';
import img10 from '../../assets/images/resize/artist/stylist/10.webp';
import img11 from '../../assets/images/resize/artist/stylist/11.webp';
import img12 from '../../assets/images/resize/artist/stylist/12.webp';
import img13 from '../../assets/images/resize/artist/stylist/13.webp';
import img14 from '../../assets/images/resize/artist/stylist/14.webp';
import img15 from '../../assets/images/resize/artist/stylist/15.webp';
import img16 from '../../assets/images/resize/artist/stylist/16.jpg';
import img17 from '../../assets/images/resize/artist/stylist/17.jpg';
import img18 from '../../assets/images/resize/artist/stylist/18.webp';
import img19 from '../../assets/images/resize/artist/stylist/19.jpg';
import img20 from '../../assets/images/resize/artist/stylist/20.webp';

import video1 from '../../assets/video/artist/video1.webm';
import video2 from '../../assets/video/artist/video2.webm';
import video3 from '../../assets/video/artist/video3.webm';
import video4 from '../../assets/video/artist/video4.mp4';
import video5 from '../../assets/video/artist/video5.mp4';

const fashionItems = [
  { src: img1, label: "BEAUTY +" },
  { src: img2, label: "STUDIO TOMBOY" },
  { src: img3, label: "WWD" },
  { src: img4, label: "STUDIO TOMBOY" },
  { src: img5, label: "STUDIO TOMBOY" },
  { src: img6, label: "TIME" },
  { src: img7, label: "ROCKPORT" },
  { src: img8, label: "ROCKPORT" },
  { src: img9, label: "ROKH X MO&CO" },
  { src: img10, label: "PROJEKT PRODUKT" },
  { src: img11, label: "MCM" },
  { src: img12, label: "LE Coq Sport" },
  { src: img13, label: "NEWBALANCE" },
  { src: img14, label: "STUDIO TOMBOY SCOUT" },
  { src: img15, label: "MINDBRIDGE" },
];

const beautyItems = [
  { src: img16, label: "LANEIGE" },
  { src: img17, label: "TIR TIR" },
  { src: img18, label: "ETAPE" },
  { src: img19, label: "Rosanna" },
  { src: img20, label: "ALLURE" },
];

const filmItems = [
  { id: 1, src: video1, label: "LANEIGE" },
  { id: 2, src: video2, label: "STUDIO TOMBOY" },
  { id: 3, src: video3, label: "PROJEKT PRODUKT" },
  { id: 4, src: video4, label: "MIND BRIDGE" },
  { id: 5, src: video5, label: "WWD" },
];


function StylistView() {
  return (
    <div id="stylist-view">

      <Header type="sub"/>
      {/* Main-content */}
      <div className="main-content">
        <div className="magazine-cover">
          <img src={thumbnail} alt="stylist view page thumbnail" />
          <div className="info">
            KEVIN KIM<small>STYLIST , DIRECTOR</small>
          </div>
        </div>
      </div>

      {/* Fashion */}
      <div className="item01">
        <h2 className="title">FASHION</h2>
        <div className="gallery-container">
          {fashionItems.map(({ src, label }, index) => (
            <div className="gallery-item" key={index}>
              <img src={src} loading="lazy" alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="view-more-btn">
          {/* Link 컴포넌트로 변경 */}
          <Link to="/FashionView">View All</Link>
        </div>
      </div>

      {/* Beauty */}
      <div className="item01">
        <h2 className="title">BEAUTY</h2>
        <div className="gallery-container">
          {beautyItems.map(({ src, label }, index) => (
            <div className="gallery-item" key={index}>
              <img src={src} loading="lazy" alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Film */}
      <div className="item01 film">
        <h2 className="title">FILM</h2>
        <div className="gallery-container">
          {filmItems.map(({ id, src, label }) => (
            <div key={id} className="gallery-item">
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                width={200}
                height={200}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StylistView;