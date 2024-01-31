import React from 'react';

import './CatsCard.css';

const CatsCard = ({ catUrls }) => {
  console.log('log2', catUrls);
  return (
    <div className="cats-card">
      <img src={catUrls} alt="Котик" />
      <button type="button" className="cats-card__btn" aria-label="Нажмите меня" />
    </div>

  );
};
export default CatsCard;
