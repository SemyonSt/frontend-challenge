import React, { useEffect, useState } from 'react';
import CatsCard from './CatsCard/CatCard';

const LikeCats = () => {
  const [likedCats, setLikedCats] = useState([]);

  useEffect(() => {
    const savedLikedCats = JSON.parse(localStorage.getItem('likedCats')) || [];
    setLikedCats(savedLikedCats);
  }, []);

  const handleRemoveLike = (removedCatId) => {
    // Обновляем состояние, исключая удаленный URL
    setLikedCats((prevLikedCats) => prevLikedCats.filter((catUrl) => catUrl !== removedCatId));

    // Обновляем локальное хранилище без удаленного URL
    const updatedLikedCats = likedCats.filter((catUrl) => catUrl !== removedCatId);
    localStorage.setItem('likedCats', JSON.stringify(updatedLikedCats));
  };

  return (
    <section>
      <div className="cats">
        {likedCats.map((url) => (
          <CatsCard key={url} cats={url} onRemoveLike={() => handleRemoveLike(url)} />
        ))}
      </div>
    </section>
  );
};

export default LikeCats;
