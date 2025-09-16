import React from "react";
import { Link } from "react-router-dom";

import photographer from '../../assets/images/artist/1.jpg';
import stylist from '../../assets/images/artist/2.jpg';
import beauty from '../../assets/images/artist/3.jpg';

// ArtistItem 컴포넌트 (각 아티스트 항목을 처리)
const ArtistItem = ({ image, link, job, name }) => (
  <div className="gallery-item">
    <Link to={link}>
      <img src={image} alt={`${job} thumbnail`} />
      <div className="overlay"></div>
      <span className="job">{job}</span>
    </Link>
    <span className="name">{name}</span>
  </div>
);

// ArtistList 컴포넌트 (전체 아티스트 리스트를 처리)
const ArtistList = () => {
  const artists = [
    {
      image: photographer,
      link: "/PhotographerView",
      job: "photographer",
      name: "JINAM KIM",
    },
    {
      image: stylist,
      link: "/StylistView",
      job: "stylist",
      name: "KEVIN KIM",
    },
    {
      image: beauty,
      link: "/BeautyView",
      job: "beauty",
      name: "MEE KYUNG KIM POTER",
    },
  ];

  return (
    <div id="artist-list">
      <div className="gallery-container">
        {artists.map((artist, index) => (
          <ArtistItem key={index} {...artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
