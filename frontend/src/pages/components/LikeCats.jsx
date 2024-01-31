/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import CatsCard from './CatsCard/CatCard';

const LikeCats = () => {
  const likedCats = useSelector((state) => state.likeCatsReducer.likedCats);

  return (
    <section>
      <div className="cats">
        {likedCats.map((url) => (
          <CatsCard key={url} catUrls={url} />
        ))}

      </div>
    </section>

  );
};
export default LikeCats;
