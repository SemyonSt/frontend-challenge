import React from 'react';
import './CatsCard.css';

const CatsCard = ({ cats, onCardLike }) => {
  const click = () => {
    onCardLike(cats);
  };

  return (
    <div className="cats-card">
      <img src={cats.url} alt="Котик" />
      <button
        type="button"
        className={`cats-card__btn ${cats.isLiked ? 'active' : ''}`}
        aria-label="Нажмите меня"
        onClick={click}
      />
    </div>
  );
};

export default CatsCard;
