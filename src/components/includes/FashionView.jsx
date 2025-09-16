import React from "react";
import Header from '../layout/Header'; 

// 이미지 import (1~44)
import fashion1 from '../../assets/images/artist/stylist/fashion/1.jpg';
import fashion2 from '../../assets/images/artist/stylist/fashion/2.jpg';
import fashion3 from '../../assets/images/artist/stylist/fashion/3.jpg';
import fashion4 from '../../assets/images/artist/stylist/fashion/4.jpg';
import fashion5 from '../../assets/images/artist/stylist/fashion/5.jpg';
import fashion6 from '../../assets/images/artist/stylist/fashion/6.jpg';
import fashion7 from '../../assets/images/artist/stylist/fashion/7.jpg';
import fashion8 from '../../assets/images/artist/stylist/fashion/8.jpg';
import fashion9 from '../../assets/images/artist/stylist/fashion/9.jpg';
import fashion10 from '../../assets/images/artist/stylist/fashion/10.jpg';
import fashion11 from '../../assets/images/artist/stylist/fashion/11.jpg';
import fashion12 from '../../assets/images/artist/stylist/fashion/12.jpg';
import fashion13 from '../../assets/images/artist/stylist/fashion/13.jpg';
import fashion14 from '../../assets/images/artist/stylist/fashion/14.jpg';
import fashion15 from '../../assets/images/artist/stylist/fashion/15.jpg';
import fashion16 from '../../assets/images/artist/stylist/fashion/16.jpg';
import fashion17 from '../../assets/images/artist/stylist/fashion/17.jpg';
import fashion18 from '../../assets/images/artist/stylist/fashion/18.jpg';
import fashion19 from '../../assets/images/artist/stylist/fashion/19.jpg';
import fashion20 from '../../assets/images/artist/stylist/fashion/20.jpg';
import fashion21 from '../../assets/images/artist/stylist/fashion/21.jpg';
import fashion22 from '../../assets/images/artist/stylist/fashion/22.jpg';
import fashion23 from '../../assets/images/artist/stylist/fashion/23.jpg';
import fashion24 from '../../assets/images/artist/stylist/fashion/24.jpg';
import fashion25 from '../../assets/images/artist/stylist/fashion/25.jpg';
import fashion26 from '../../assets/images/artist/stylist/fashion/26.jpg';
import fashion27 from '../../assets/images/artist/stylist/fashion/27.jpg';
import fashion28 from '../../assets/images/artist/stylist/fashion/28.jpg';
import fashion29 from '../../assets/images/artist/stylist/fashion/29.jpg';
import fashion30 from '../../assets/images/artist/stylist/fashion/30.jpg';
import fashion31 from '../../assets/images/artist/stylist/fashion/31.jpg';
import fashion32 from '../../assets/images/artist/stylist/fashion/32.jpg';
import fashion33 from '../../assets/images/artist/stylist/fashion/33.jpg';
import fashion34 from '../../assets/images/artist/stylist/fashion/34.jpg';
import fashion35 from '../../assets/images/artist/stylist/fashion/35.jpg';
import fashion36 from '../../assets/images/artist/stylist/fashion/36.jpg';
import fashion37 from '../../assets/images/artist/stylist/fashion/37.jpg';
import fashion38 from '../../assets/images/artist/stylist/fashion/38.jpg';
import fashion39 from '../../assets/images/artist/stylist/fashion/39.jpg';
import fashion40 from '../../assets/images/artist/stylist/fashion/40.jpg';
import fashion41 from '../../assets/images/artist/stylist/fashion/41.jpg';
import fashion42 from '../../assets/images/artist/stylist/fashion/42.jpg';
import fashion43 from '../../assets/images/artist/stylist/fashion/43.jpg';
import fashion44 from '../../assets/images/artist/stylist/fashion/44.jpg';

// 이미지 배열
const fashionItems = [
  { src: fashion1, label: "BEAUTY +" },
  { src: fashion2, label: "STUDIO TOMBOY" },
  { src: fashion3, label: "WWD" },
  { src: fashion4, label: "STUDIO TOMBOY" },
  { src: fashion5, label: "STUDIO TOMBOY" },
  { src: fashion6, label: "TIME" },
  { src: fashion7, label: "ROCKPORT" },
  { src: fashion8, label: "ROCKPORT" },
  { src: fashion9, label: "MO&CO" },
  { src: fashion10, label: "Projekt Produkt" },
  { src: fashion11, label: "MCM" },
  { src: fashion12, label: "LE Coq Sport" },
  { src: fashion13, label: "NEW BALANCE" },
  { src: fashion14, label: "STUDIO TOMBOY" },
  { src: fashion15, label: "MINDBRIDGE" },
  { src: fashion16, label: "MINDBRIDGE" },
  { src: fashion17, label: "Projekt Produkt" },
  { src: fashion18, label: "STUDIO TOMBOY" },
  { src: fashion19, label: "STUDIO TOMBOY" },
  { src: fashion20, label: "STUDIO TOMBOY" },
  { src: fashion21, label: "ZOOC" },
  { src: fashion22, label: "JUCY JUDY" },
  { src: fashion23, label: "ROCKPORT" },
  { src: fashion24, label: "STUDIO TOMBOY" },
  { src: fashion25, label: "MINDBRIDGE" },
  { src: fashion26, label: "Projekt Produkt" },
  { src: fashion27, label: "CARLYN BAG" },
  { src: fashion28, label: "NIKE" },
  { src: fashion29, label: "STUDIO TOMBOY" },
  { src: fashion30, label: "EQL" },
  { src: fashion31, label: "EQL" },
  { src: fashion32, label: "무신사" },
  { src: fashion33, label: "무신사" },
  { src: fashion34, label: "MOE" },
  { src: fashion35, label: "NEW BALANCE" },
  { src: fashion36, label: "SNOWPICK" },
  { src: fashion37, label: "SUZI" },
  { src: fashion38, label: "SOTA" },
  { src: fashion39, label: "Li" },
  { src: fashion40, label: "MINDBRIDGE" },
  { src: fashion41, label: "RARE" },
  { src: fashion42, label: "zaya" },
  { src: fashion43, label: "go see - LONDON" },
  { src: fashion44, label: "SUMIN" },
];

const StylistFashionViewAll = () => {
  return (
    <div id="stylist-fashion-view-all">
        <Header type="sub"/>
      <div className="container">
        <div className="grid">
          {fashionItems.map(({ src, label }, index) => (
            <div key={index}>
              <img src={src} alt={`Fashion ${index + 1}`} loading="lazy" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StylistFashionViewAll;
