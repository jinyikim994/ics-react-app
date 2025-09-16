// React 라이브러리 불러오기
import React, { useState } from "react";

import video1 from '../../assets/video/production/1.mp4';
import video3 from '../../assets/video/production/3.mp4';
import video7 from '../../assets/video/production/7.mp4';
import video8 from '../../assets/video/production/8.mp4';
import video9 from '../../assets/video/production/9.mp4';
import video11 from '../../assets/video/production/11.mp4';
import video13 from '../../assets/video/production/13.mp4';
import video14 from '../../assets/video/production/14.mp4';

import image2 from '../../assets/images/production/2.jpeg';
import image4 from '../../assets/images/production/4.jpg';
import image5 from '../../assets/images/production/5.jpg';
import image6 from '../../assets/images/production/6.jpg';
import image10 from '../../assets/images/production/10.jpg';
import image12 from '../../assets/images/production/12.jpg';

// Bottom view
import bottom1 from '../../assets/video/production/bottom/1.mp4';
import bottom2 from '../../assets/video/production/bottom/2.mp4';
import bottom3 from '../../assets/video/production/bottom/3.mp4';
import bottom4 from '../../assets/video/production/bottom/4.mp4';
import Sidebar from "../layout/Sidebar";

const Production = () => {

const gridItems = [
  { type: 'video', src: video1, label: 'STUDIO TOMBOY x JANNABI' },
  { type: 'image', src: image2, label: 'STUDIO+TOMBOY', alt: 'STUDIO+TOMBOY' },
  { type: 'video', src: video3, label: 'ProjektProdukt', className: 'full' },
  { type: 'image', src: image4, label: 'ROKH x MO&CO', alt: 'STUDIO+TOMBOY' },
  { type: 'image', src: image5, label: 'TIME', className: 'top', alt: 'STUDIO+TOMBOY' },
  { type: 'video', src: video7, label: 'GCUT' },
  { type: 'image', src: image6, label: 'ROCKPORT', className: 'top' },
  { type: 'video', src: video8, label: 'MIND BRIDGE', className: 'full' },
  { type: 'video', src: video9, label: 'STUDIO TOMBOY x KIMDAMI' },
  { type: 'image', src: image10, label: 'Jucy Judy', className: 'top', alt: 'STUDIO+TOMBOY' },
  { type: 'video', src: video11, label: 'ProjektProdukt' },
  { type: 'image', src: image12, label: 'MIND BRIDGE', className: 'top', alt: 'STUDIO+TOMBOY' },
  { type: 'video', src: video13, label: 'LeCoqSportif' },
  { type: 'video', src: video14, label: 'NB x Ofr.Paris', className: 'top' },
];

const bottomVideos = [bottom1, bottom2, bottom3, bottom4];

  return (
    <div id="production">

      <Sidebar/>

      {/* Main Container */}
      <div className="container">

        {/* Grid */}
        <div className="grid">
          {gridItems.map((item, index) => (
            <div key={index} className={`item ${item.className || ''}`}>
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                ></video>
              ) : (
                <img src={item.src} alt={item.alt || ''} />
              )}
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom-view */}
        <div className="bottom-view">
          <p className="title">View archive</p>
          {bottomVideos.map((src, index) => (
            <div className="item" key={index}>
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              ></video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Production;