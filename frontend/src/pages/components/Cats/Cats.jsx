import React from 'react';

import './Cats.css';

import CatsCard from '../CatsCard/CatCard';

const Cats = ({ catUrls }) => {
  console.log('log1', catUrls);
  return (
    <section>
      <div className="cats">
        {catUrls.map((url) => (
          <CatsCard key={url} catUrls={url} />
        ))}

      </div>
    </section>

  );
};
export default Cats;
