import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './header.css';
import Cats from './components/Cats/Cats';
import LikeCats from './components/LikeCats';

const Main = () => {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState('all');
  const navigate = useNavigate();

  const url = `https://api.thecatapi.com/v1/images/search?limit=15&page=${page}`;
  const apiKey = 'live_e9ngBAgHEUKtb9uhZTSWTZw505eTv7bX7I9tmAKxU9TYfZP52TqGXBjDnqSYBrIK';

  useEffect(() => {
    const loadMoreCats = async () => {
      fetch(url, {
        headers: {
          'x-api-key': apiKey,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setLoading(true);
          const catUrls = result.map((cat) => cat.url);
          setCats((prevCats) => [...prevCats, ...catUrls]);
          setPage((prevPage) => prevPage + 1);
        })
        .catch((error) => console.log('error', error))
        .finally(() => setLoading(false));
    };

    loadMoreCats();

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 1
        && !loading
      ) {
        console.log('hello');
        loadMoreCats();
      }
    };
    window.addEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === 'all') {
      navigate('/');
    } else {
      navigate('/likeCats');
    }
  };

  return (
    <div>
      <header>
        <div className="header">
          <nav>
            <button type="button" className={`header_btn ${activeButton === 'all' ? 'active' : ''}`} onClick={() => handleButtonClick('all')}>Все котики</button>
            <button type="button" className={`header_btn ${activeButton === 'likeCats' ? 'active' : ''}`} onClick={() => handleButtonClick('likeCats')}>Любимые котики</button>
          </nav>
        </div>
      </header>

      <main>

        <Routes>
          <Route path="/" element={<Cats catUrls={cats} />} />
          <Route path="/likeCats" element={<LikeCats />} />
        </Routes>

      </main>
    </div>

  );
};

export default Main;

// https://github.com/alraskalov/frontend-challenge/blob/13e8682da98472733b4ee843568d4517ce3463d1/src/components/Header/Header.css#L13
// https://github.com/smirnova-daria/favorite-cats/blob/a9258846fd9e9c0f817e83b8d77fad1a6906e68e/src/components/Navbar.vue#L9
