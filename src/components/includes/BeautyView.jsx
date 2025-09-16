import React from "react";

import { Link } from 'react-router-dom';

import Header from '../layout/Header'; 

import thumbnail from '../../assets/images/artist/beauty/thumnail.webp';
import img1 from '../../assets/images/artist/beauty/1.jpg';
import img2 from '../../assets/images/artist/beauty/2.jpg';
import img3 from '../../assets/images/artist/beauty/3.jpg';
import img4 from '../../assets/images/artist/beauty/4.jpg';
import img5 from '../../assets/images/artist/beauty/5.jpg';

const galleryItems = [
  { src: img1, label: 'BOF MAGAZINE' },
  { src: img2, label: 'Stella McCartney' },
  { src: img3, label: 'PERSONAL WORK' },
  { src: img4, label: 'PORTRAIT' },
  { src: img5, label: 'PROJEKT PRODUKT' },
];

const BeautyView = () => {
  const baseImagePath = "/assets/images/resize/artist/beauty/";

  return (
    <div id="beauty-view">

      <Header type="sub"/>

      <div className="main-content">
        <div className="magazine-cover">
          <img src={thumbnail} alt="beauty view page thumbnail" />
          <div className="bottom-info">
            MEE KYUNG KIM POTER<small>HAIR STYLIST</small>
          </div>
        </div>
      </div>

      <div className="item01">
        <h2 className="title">HAIR STYLIST</h2>
        <div className="gallery-container">

          {galleryItems.map(({ src, label }, index) => (
            <div className="gallery-item" key={index}>
              <img src={src} loading="lazy" alt={label} />
              <span>{label}</span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default BeautyView;