import React from 'react';
import './Cats.css';
import CatsCard from '../CatsCard/CatCard';

const Cats = ({ cats, onCardLike }) => (
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

    <div>
      {cats.length !== 0 ? (
        <h3 className="loading__cats">... загружаем еще котиков ...</h3>
      ) : (
        <h3>... загружаем котиков ...</h3>
      )}
    </div>
  </section>
);
export default Cats;
