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
  const [savedCats, setSavedCats] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const localCats = JSON.parse(localStorage.getItem('likedCats'));
    if (localCats) {
      setSavedCats(localCats);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('likedCats', JSON.stringify(savedCats));
  }, [savedCats]);

  useEffect(() => {
    const loadMoreCats = async () => {
      try {
        const result = await getCats(page);
        setLoading(true);
        setCats((prevCats) => [...prevCats, ...result]);
        console.log('catUrls', cats);
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

  const handleCardLike = (card) => {
    // eslint-disable-next-line no-param-reassign
    card.isLiked = !card.isLiked;
    setSavedCats((prevSavedCats) => {
      const updatedCats = prevSavedCats.includes(card)
        ? prevSavedCats.filter((c) => c !== card)
        : [...prevSavedCats, card];
      return updatedCats;
    });
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
          <Route path="/" element={<Cats cats={cats} onCardLike={handleCardLike} />} />
          <Route path="/likeCats" element={<LikeCats cats={savedCats} onCardLike={handleCardLike} />} />
        </Routes>

      </div>
    </div>

  );
};

export default Main;
