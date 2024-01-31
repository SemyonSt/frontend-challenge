import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { likeCat } from '../../../slices/likeCatsSlice';
import { actions as likeActions } from '../../../slices/likeCatsSlice';

import './CatsCard.css';

const CatsCard = ({ catUrls }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const click = (url) => {
    console.log('hello', url);
    setIsActive(!isActive);
    dispatch(likeActions.likeCat(url));
  };

  return (
    <div className="cats-card">
      <img src={catUrls} alt="Котик" />
      <button
        type="button"
        className={`cats-card__btn ${isActive ? 'active' : ''}`}
        aria-label="Нажмите меня"
        onClick={() => click(catUrls)}
      />
    </div>

  );
};
export default CatsCard;
