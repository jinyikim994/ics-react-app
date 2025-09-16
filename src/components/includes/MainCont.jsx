// React 라이브러리 불러오기
import React, { useEffect } from 'react';

// 이미지 불러오기
import image1 from '../../assets/images/main/1-1.webp';
import image2 from '../../assets/images/main/1-2.webp';
import image3 from '../../assets/images/main/1-3.webp';
import video1 from '../../assets/video/main/1-4.webm';
import image5 from '../../assets/images/main/1-5.webp';

import image6 from '../../assets/images/main/2-1.webp';
import video2 from '../../assets/video/main/2-2.webm';
import image8 from '../../assets/images/main/2-3.webp';

import image9 from '../../assets/images/main/3-1.webp';
import image10 from '../../assets/images/main/3-2.webp';
import video3 from '../../assets/video/main/3-3.webm';
import image12 from '../../assets/images/main/3-4.webp';

// 1열
const column1Content = [
  { type: "img", src: image1, alt: "Image 1-1" },
  { type: "img", src: image2, alt: "Image 1-2" },
  { type: "img", src: image3, alt: "Image 1-3" },
  { type: "video", src: video1},
  { type: "img", src: image5, alt: "Image 1-5" },
];

// 2열
const column2Content = [
  { type: "img", src: image6, alt: "Image 2-1" },
  { type: "video", src: video2},
  { type: "img", src: image8, alt: "Image 2-3" }
];

// 3열
const column3Content = [
  { type: "img", src: image9, alt: "Image 3-1" },
  { type: "img", src: image10, alt: "Image 3-2" },
  { type: "video", src: video3},
  { type: "img", src: image12, alt: "Image 2-3" }
];

// 스크롤러 컴포넌트
const Scroller = ({ columnClass, items }) => {
  useEffect(() => {
    // 무한 스크롤을 위한 콘텐츠 반복
    const allItems = [...items, ...items];
    const scroller = document.querySelector(`.${columnClass} .scroller`);
    scroller.innerHTML = ''; // 기존 콘텐츠 초기화

    allItems.forEach((item, index) => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('masonry-item');

      if (item.type === "img") {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || "";
        wrapper.appendChild(img);
      } else if (item.type === "video") {
        const video = document.createElement('video');
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.setAttribute("decoding", "async");
        video.removeAttribute("controls");

        const source = document.createElement('source');
        source.src = item.src;
        source.type = "video/webm";

        video.appendChild(source);
        wrapper.appendChild(video);
      }
      scroller.appendChild(wrapper);
    });
  }, [columnClass, items]);

  return (
    <div className={`column ${columnClass}`}>
      <div className="scroller"></div>
    </div>
  );
};

// Main 컴포넌트
const Gallery = () => {
  return (
    <div id="main">
      <div className="gallery">
        <Scroller columnClass="column-1" items={column1Content} />
        <Scroller columnClass="column-2" items={column2Content} />
        <Scroller columnClass="column-3" items={column3Content} />
      </div>
    </div>
  );
};

export default Gallery;