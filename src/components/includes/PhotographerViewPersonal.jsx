import React from "react";

import Header from '../layout/Header'; 

const PhotographerPersonalAll = () => {
  const totalImages = 64;
  const imageBasePath = `${process.env.PUBLIC_URL}/images/resize/artist/photographer/view/personal`;

  // "cover" class가 필요한 이미지 번호
  const coverImageNumbers = [5, 11, 36, 58, 60];

  return (
    <div id="photographer-personal-all">
      
      <Header type="sub"/>

      <div className="container">
        <div className="grid">
          {Array.from({ length: totalImages }, (_, i) => {
            const index = i + 1;
            const isCover = coverImageNumbers.includes(index);
            const src = `${imageBasePath}/${index}.webp`;

            return (
              <img
                key={index}
                src={src}
                alt={`Image ${index}`}
                loading="lazy"
                className={isCover ? 'cover' : ''}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotographerPersonalAll;