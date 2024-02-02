import React from 'react';
import CatsCard from './CatsCard/CatCard';

const LikeCats = ({ cats, onCardLike }) => (
  <section>
    <div className="cats">
      {cats.map((url) => (
        <CatsCard
          key={url}
          cats={url}
          onCardLike={onCardLike}
        />
      ))}
    </div>
  </section>
);

export default LikeCats;
