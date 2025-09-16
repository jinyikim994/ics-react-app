import React from "react";

// 링크 연동
import { Link } from 'react-router-dom';

// 컴포넌트
import Header from '../layout/Header'; 

// 이미지
import thumbnail from '../../assets/images/resize/artist/photographer/view/thumbnail.webp';
import img1 from '../../assets/images/resize/artist/photographer/view/1.webp';
import img2 from '../../assets/images/resize/artist/photographer/view/2.webp';
import img3 from '../../assets/images/resize/artist/photographer/view/3.webp';
import img4 from '../../assets/images/resize/artist/photographer/view/4.webp';
import img5 from '../../assets/images/resize/artist/photographer/view/5.webp';
import img6 from '../../assets/images/resize/artist/photographer/view/6.webp';
import img7 from '../../assets/images/resize/artist/photographer/view/7.webp';
import img8 from '../../assets/images/resize/artist/photographer/view/8.webp';
import img9 from '../../assets/images/resize/artist/photographer/view/9.webp';
import img10 from '../../assets/images/resize/artist/photographer/view/10.webp';
import img11 from '../../assets/images/resize/artist/photographer/view/11.webp';
import img12 from '../../assets/images/resize/artist/photographer/view/12.webp';
import img13 from '../../assets/images/resize/artist/photographer/view/13.webp';
import img14 from '../../assets/images/resize/artist/photographer/view/14.webp';
import img15 from '../../assets/images/resize/artist/photographer/view/15.webp';
import img16 from '../../assets/images/resize/artist/photographer/view/16.webp';
import img17 from '../../assets/images/resize/artist/photographer/view/17.webp';
import img18 from '../../assets/images/resize/artist/photographer/view/18.webp';
import img19 from '../../assets/images/resize/artist/photographer/view/19.webp';
import img20 from '../../assets/images/resize/artist/photographer/view/20.webp';
import img21 from '../../assets/images/resize/artist/photographer/view/21.webp';
import img22 from '../../assets/images/resize/artist/photographer/view/22.webp';
import img23 from '../../assets/images/resize/artist/photographer/view/23.webp';
import img24 from '../../assets/images/resize/artist/photographer/view/24.webp';
import img25 from '../../assets/images/resize/artist/photographer/view/25.webp';

const advertisingItems = [
  { src: img1, label: "TIME HOMME" },
  { src: img2, label: "ROKH x MO&CO" },
  { src: img3, label: "TIME" },
  { src: img4, label: "DAKS" },
  { src: img5, label: "TIME HOMME" },
  { src: img6, label: "STUDIO TOMBOY" },
  { src: img7, label: "MIND BRIDGE" },
  { src: img8, label: "SISLEY" },
  { src: img9, label: "SHIFT.G" },
  { src: img10, label: "GALAXY" },
  { src: img11, label: "DKNY" },
  { src: img12, label: "SISLEY" },
  { src: img13, label: "LUV M" },
  { src: img14, label: "STUDIO TOMBOY Atelier" },
  { src: img15, label: "GALAXY" },
];

const personalItems = [
  { src: img16},
  { src: img17 },
  { src: img18 },
  { src: img19 },
  { src: img20 },
  { src: img21 },
  { src: img22 },
  { src: img23 },
  { src: img24 },
  { src: img25 },
];

const PhotographerView = () => {
  const baseImagePath = "/assets/images/resize/artist/photographer/view/";

  return (
    
    <div id="photographer-view">

      <Header type="sub"/>

      {/* Main-content */}
      <div className="main-content">
        <div className="magazine-cover">
          <img src={thumbnail} alt="photographer view page thumbnail" />
          <div className="info">
            JINAM KIM<small>PHOTOGRAPHER</small>
          </div>
        </div>
      </div>
      {/* //Main-content */}

      {/* Advertising Section */}
      <div className="ad">
        <h2 className="title">advertising</h2>
        <div className="gallery-container">
          {advertisingItems.map(({ src, label }, index) => (
            <div className="gallery-item" key={index}>
              <img src={src} loading="lazy" alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="view-more-btn">
          <Link to="/PhotographerViewAd">View All</Link>
        </div>
      </div>
      {/* Advertising Section */}

      {/* Personal Section */}
      <div className="personal">
        <h2 className="title">personal</h2>
        <div className="gallery-container">
          {personalItems.map(({ src }, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={src} 
                loading="lazy"
                alt={`Personal ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="view-more-btn">
           <Link to="/PhotographerViewPersonal">View All</Link>
        </div>
      </div>
      {/* Personal Section */}
    </div>
  );
};

export default PhotographerView;
