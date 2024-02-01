// CatsCard.js
import React, { useEffect, useState } from 'react';
import './CatsCard.css';

const CatsCard = ({ cats, onRemoveLike }) => {
  const [likedCats, setLikedCats] = useState([]);

  useEffect(() => {
    const savedLikedCats = JSON.parse(localStorage.getItem('likedCats')) || [];
    setLikedCats(savedLikedCats);
  }, []);

  const isCatLiked = likedCats.some((cat) => cat.url === cats.url);

  const click = (cat) => {
    if (isCatLiked) {
      onRemoveLike(cat.id);
    } else {
      const updatedLikedCats = [...likedCats, cat];
      setLikedCats(updatedLikedCats);
      localStorage.setItem('likedCats', JSON.stringify(updatedLikedCats));
    }
  };

  useEffect(() => {
    localStorage.setItem('likedCats', JSON.stringify(likedCats));
    console.log('STORAAAGE', localStorage);
  }, [likedCats]);

  return (
    <div className="cats-card">
      <img src={cats.url} alt="Котик" />
      <button
        type="button"
        className={`cats-card__btn ${isCatLiked ? 'active' : ''}`}
        aria-label="Нажмите меня"
        onClick={() => click(cats)}
      />
    </div>
  );
};

export default CatsCard;
