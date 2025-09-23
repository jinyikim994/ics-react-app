// React 라이브러리 불러오기
import React, { useEffect, useRef, useState } from 'react';

import img1 from '../../assets/images/about/1.jpg';
import img2 from '../../assets/images/about/2.jpg';
import img3 from '../../assets/images/about/3.jpg';
import img4 from '../../assets/images/about/4.jpg';
import img5 from '../../assets/images/about/5.jpg';
import img6 from '../../assets/images/about/6.jpg';
import img7 from '../../assets/images/about/7.jpg';
import img8 from '../../assets/images/about/8.jpg';
import img9 from '../../assets/images/about/9.jpg';
import img10 from '../../assets/images/about/10.jpg';
import img11 from '../../assets/images/about/11.jpg';
import img12 from '../../assets/images/about/12.jpg';
import img13 from '../../assets/images/about/13.jpg';
import img14 from '../../assets/images/about/14.jpg';

const imageList = [
  { src: img1 ,type: 'small' },
  { src: img2, type: 'cover' },
  { src: img3, type: 'small' },
  { src: img4, type: 'small' },
  { src: img5, type: 'cover' },
  { src: img6, type: 'small' },
  { src: img7, type: 'small' },
  { src: img8, type: 'small' },
  { src: img9, type: 'small' },
  { src: img10, type: 'cover' },
  { src: img11, type: 'small' },
  { src: img12, type: 'small' },
  { src: img13, type: 'cover' },
  { src: img14, type: 'small' },
];


const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // 이미지 자동 슬라이드 (0.7초 간격)
    timeoutRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % imageList.length);
    }, 700);

    return () => clearInterval(timeoutRef.current);
  }, []);

  return (
    <div id="about">
      <div className="container">
        <h1 className="title">About</h1>
        <div className="wrap">
          <div className="slide">
            {imageList.map((img, index) => (
              <div
                key={index}
                className={img.type}
                style={{
                  backgroundImage: `url(${img.src})`,
                  opacity: currentIndex === index ? 1 : 0,
                  transition: 'opacity 0.1s ease-out',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </div>

          <div className="desc">
            <p className="kor">
              ICONIC CREATIVE STUDIO는 서울과 런던을 기반으로 활동하는 아티스트 에이전시입니다.<br />
              포토그래퍼, 스타일리스트, 뷰티 아티스트, 모델 등 패션 비주얼 전반을 아우르는 크리에이터들과 함께합니다.<br />
              런던에서 커리어를 시작한 이들은 각자의 분야에서 감각과 경험을 쌓아왔으며,<br />
              국내외 다양한 패션 브랜드 및 아티스트와 협업하며 브랜드 고유의 색을 시각적으로 풀어내는 작업을 이어가고 있습니다.<br />
            </p>
            <p className="kor">
              캠페인, 콘텐츠, SNS 등 다양한 채널에 유연하게 반응하는 비주얼을 제작하며, <br />
              디렉션부터 실행까지 정제된 감도와 직관적인 미감을 바탕으로 설득력 있는 결과물을 완성합니다.<br />
              우리는 브랜드와 아티스트의 메시지가 문화적으로 확장될 수 있도록 돕고자 합니다.<br />
            </p>
            <p className="kor">
              ICONIC CREATIVE STUDIO는 아티스트들과 함께 브랜드의 비전을 시각적으로 실현하며, 창의적인 흐름을 만들어갑니다.
            </p>

            <div className="eng-wrap">
              <p className="eng">
                ICONIC CREATIVE STUDIO is an artist agency based in Seoul and London.<br />
                We work with creators across the entire spectrum of fashion visuals, including photographers, stylists, beauty artists, and models.<br />
                Our artists began their careers in London and have since cultivated a strong sense of style and expertise in their respective fields.<br />
                They continue to collaborate with a wide range of fashion brands and artists both locally and internationally, visually expressing<br />
                each brand's unique identity.
              </p>
              <p className="eng">
                We produce visuals that flexibly adapt to various platforms such as campaigns, content, and social media.<br />
                From direction to execution, we deliver refined, intuitive, and compelling results grounded in a sophisticated aesthetic.<br />
                Our mission is to help brands and artists expand their messages in a culturally meaningful way.<br />
              </p>
              <p className="eng">
                ICONIC CREATIVE STUDIO brings brand visions to life through visual storytelling and fosters a continuous flow of creativity with our artists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;