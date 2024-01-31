import React from 'react';
import { useSelector } from 'react-redux';
import CatsCard from './CatsCard/CatCard';

const LikeCats = () => {
  const initialDeals = useSelector((state) => state.likeCatsReducer.likedCats);
  console.log('log2', initialDeals);
  // const [isActive, setIsActive] = useState(false);

  // const click = (url) => {
  //   console.log('hello', url);
  //   setIsActive(!isActive);
  // };

  return (
    <section>
      <div className="cats">
        {initialDeals.map((url) => (
          <CatsCard key={url} catUrls={url} />
        ))}

      </div>
    </section>

  );
};
export default LikeCats;
