/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as likeActions } from '../../../slices/likeCatsSlice';

import './CatsCard.css';

const CatsCard = ({ catUrls }) => {
  const dispatch = useDispatch();
  const likedCats = useSelector((state) => state.likeCatsReducer.likedCats);

  const isCatLiked = likedCats.includes(catUrls);

  const click = (url) => {
    console.log('привет', url);

    if (isCatLiked) {
      dispatch(likeActions.removeLike(url));
    } else {
      dispatch(likeActions.likeCat(url));
    }
  };

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
