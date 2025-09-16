import React from "react";

import Header from '../layout/Header'; 

import img1 from '../../assets/images/resize/artist/photographer/view/ad/1.webp';
import img2 from '../../assets/images/resize/artist/photographer/view/ad/2.webp';
import img3 from '../../assets/images/resize/artist/photographer/view/ad/3.webp';
import img4 from '../../assets/images/resize/artist/photographer/view/ad/4.webp';
import img5 from '../../assets/images/resize/artist/photographer/view/ad/5.webp';
import img6 from '../../assets/images/resize/artist/photographer/view/ad/6.webp';
import img7 from '../../assets/images/resize/artist/photographer/view/ad/7.webp';
import img8 from '../../assets/images/resize/artist/photographer/view/ad/8.webp';
import img9 from '../../assets/images/resize/artist/photographer/view/ad/9.webp';
import img10 from '../../assets/images/resize/artist/photographer/view/ad/10.webp';
import img11 from '../../assets/images/resize/artist/photographer/view/ad/11.webp';
import img12 from '../../assets/images/resize/artist/photographer/view/ad/12.webp';
import img13 from '../../assets/images/resize/artist/photographer/view/ad/13.webp';
import img14 from '../../assets/images/resize/artist/photographer/view/ad/14.webp';
import img15 from '../../assets/images/resize/artist/photographer/view/ad/15.webp';
import img16 from '../../assets/images/resize/artist/photographer/view/ad/16.webp';
import img17 from '../../assets/images/resize/artist/photographer/view/ad/17.webp';
import img18 from '../../assets/images/resize/artist/photographer/view/ad/18.webp';
import img19 from '../../assets/images/resize/artist/photographer/view/ad/19.webp';
import img20 from '../../assets/images/resize/artist/photographer/view/ad/20.webp';
import img21 from '../../assets/images/resize/artist/photographer/view/ad/21.webp';
import img22 from '../../assets/images/resize/artist/photographer/view/ad/22.webp';
import img23 from '../../assets/images/resize/artist/photographer/view/ad/23.webp';
import img24 from '../../assets/images/resize/artist/photographer/view/ad/24.webp';
import img25 from '../../assets/images/resize/artist/photographer/view/ad/25.webp';
import img26 from '../../assets/images/resize/artist/photographer/view/ad/26.webp';
import img27 from '../../assets/images/resize/artist/photographer/view/ad/27.webp';
import img28 from '../../assets/images/resize/artist/photographer/view/ad/28.webp';
import img29 from '../../assets/images/resize/artist/photographer/view/ad/29.webp';
import img30 from '../../assets/images/resize/artist/photographer/view/ad/30.webp';
import img31 from '../../assets/images/resize/artist/photographer/view/ad/31.webp';
import img32 from '../../assets/images/resize/artist/photographer/view/ad/32.webp';
import img33 from '../../assets/images/resize/artist/photographer/view/ad/33.webp';
import img34 from '../../assets/images/resize/artist/photographer/view/ad/34.webp';
import img35 from '../../assets/images/resize/artist/photographer/view/ad/35.webp';
import img36 from '../../assets/images/resize/artist/photographer/view/ad/36.webp';
import img37 from '../../assets/images/resize/artist/photographer/view/ad/37.webp';
import img38 from '../../assets/images/resize/artist/photographer/view/ad/38.webp';
import img39 from '../../assets/images/resize/artist/photographer/view/ad/39.webp';
import img40 from '../../assets/images/resize/artist/photographer/view/ad/40.webp';
import img41 from '../../assets/images/resize/artist/photographer/view/ad/41.webp';
import img42 from '../../assets/images/resize/artist/photographer/view/ad/42.webp';
import img43 from '../../assets/images/resize/artist/photographer/view/ad/43.webp';
import img44 from '../../assets/images/resize/artist/photographer/view/ad/44.webp';
import img45 from '../../assets/images/resize/artist/photographer/view/ad/45.webp';

const adItems = [
  { src: img1, label: 'TIME HOMME' },
  { src: img2, label: 'TIME' },
  { src: img3, label: 'ROKH x MO&CO' },
  { src: img4, label: 'DAKS' },
  { src: img5, label: 'TIME HOMME' },
  { src: img6, label: 'MIND BRIDGE MAN' },
  { src: img7, label: 'MIND BRIDGE WOMAN' },
  { src: img8, label: 'STUDIO TOMBOY ATELIER' },
  { src: img9, label: 'STUDIO TOMBOY' },
  { src: img10, label: 'STUDIO TOMBOY SCOUT' },
  { src: img11, label: 'MIND BRIDGE' },
  { src: img12, label: 'DKNY' },
  { src: img13, label: 'GALAXY' },
  { src: img14, label: 'SHIFT.G' },
  { src: img15, label: 'SISLEY' },
  { src: img16, label: 'LUV M' },
  { src: img17, label: 'LANVIN COLLECTION' },
  { src: img18, label: 'GALAXY' },
  { src: img19, label: 'M12' },
  { src: img20, label: 'DKNY' },
  { src: img21, label: 'SHIFT.G' },
  { src: img22, label: 'DKNY' },
  { src: img23, label: 'SISLEY' },
  { src: img24, label: 'THE IZZAT' },
  { src: img25, label: 'DEWL' },
  { src: img26, label: 'GALAXY LIFESTYLE' },
  { src: img27, label: 'the CASHMERE' },
  { src: img28, label: 'EMDIRUSA' },
  { src: img29, label: 'PROJEKT PRODUKT' },
  { src: img30, label: 'ADDIR' },
  { src: img31, label: 'CANADA GOOSE x BEAKER' },
  { src: img32, label: 'DESCENTE' },
  { src: img33, label: 'NEW BALANCE' },
  { src: img34, label: 'DESCENTE' },
  { src: img35, label: 'UMBRO' },
  { src: img36, label: 'KANGOL' },
  { src: img37, label: 'TOPTEN10 BALANCE' },
  { src: img38, label: 'TOPTEN10 BALANCE' },
  { src: img39, label: 'BOSS GOLF' },
  { src: img40, label: 'MCKAYSON' },
  { src: img41, label: 'WAAC&JONES' },
  { src: img42, label: 'CRAIG&KARL' },
  { src: img43, label: 'CRAIG&KARL' },
  { src: img44, label: 'CRAIG&KARL' },
  { src: img45, label: 'EQL' },
];

const PhotographerAdAll = () => {
  return (
    <div id="photographer-ad-all">
      <Header type="sub"/>
      <div className="container">
        <div className="grid">
          {adItems.map(({ src, label }, index) => (
            <div key={index}>
              <img src={src} alt={`Image ${index + 1}`} loading="lazy" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotographerAdAll;