import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './header.css';
import Cats from './components/Cats/Cats';
import LikeCats from './components/LikeCats';
import getCats from './api/catApi';

const Main = () => {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState('all');

  const navigate = useNavigate();

  useEffect(() => {
    const loadMoreCats = async () => {
      try {
        const result = await getCats(page);
        setLoading(true);
        const catUrls = result.map((cat) => cat.url);
        setCats((prevCats) => [...prevCats, ...catUrls]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
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

      <div className="main">

        <Routes>
          <Route path="/" element={<Cats catUrls={cats} />} />
          <Route path="/likeCats" element={<LikeCats />} />
        </Routes>

      </div>
    </div>

  );
};

export default Main;
