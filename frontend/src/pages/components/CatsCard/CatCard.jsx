/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { actions as likeActions } from '../../../slices/likeCatsSlice';

import './CatsCard.css';

const CatsCard = ({ catUrls }) => {
  const [likedCats, setLikedCats] = useState([]);

  useEffect(() => {
    const savedLikedCats = JSON.parse(localStorage.getItem('likedCats')) || [];
    setLikedCats(savedLikedCats);
  }, []);

  const isCatLiked = likedCats.includes(catUrls);

  const click = (url) => {
    if (isCatLiked) {
      const updatedLikedCats = likedCats.filter((catUrl) => catUrl !== url);
      setLikedCats(updatedLikedCats);
    } else {
      const updatedLikedCats = [...likedCats, url];
      setLikedCats(updatedLikedCats);
    }
  };

  useEffect(() => {
    localStorage.setItem('likedCats', JSON.stringify(likedCats));
  }, [likedCats]);

  useEffect(() => {
    console.log(likedCats);
  }, [likedCats]);

  return (
    <div className="cats-card">
      <img src={catUrls} alt="Котик" />
      <button
        type="button"
        className={`cats-card__btn ${isCatLiked ? 'active' : ''}`}
        aria-label="Нажмите меня"
        onClick={() => click(catUrls)}
      />
    </div>

  );
};
export default CatsCard;
