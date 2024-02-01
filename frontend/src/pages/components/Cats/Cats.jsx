import React from 'react';

import './Cats.css';

import CatsCard from '../CatsCard/CatCard';

const Cats = ({ catUrls }) => (
  <section>
    <div className="cats">
      {catUrls.map((url) => (
        <CatsCard key={url} catUrls={url} />
      ))}

    </div>

    <div>
      {
        catUrls.length !== 0
          ? <h3 className="loading__cats">... загружаем еще котиков ...</h3>
          : <h3>... загружаем котиков ...</h3>
        }

    </div>
  </section>

);
export default Cats;
