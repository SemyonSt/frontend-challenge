import React, { useEffect, useState } from 'react';
import './header.css';
import Cats from './components/Cats/Cats';

const Main = () => {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const url = 'https://api.thecatapi.com/v1/images/search?limit=7';
  const apiKey = 'live_e9ngBAgHEUKtb9uhZTSWTZw505eTv7bX7I9tmAKxU9TYfZP52TqGXBjDnqSYBrIK';

  useEffect(() => {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-api-key': 'DEMO-API-KEY',
    });

    const requestOptions = {
      method: 'GET',
      headers,
      redirect: 'follow',
    };
    // fetch(`https://api.thecatapi.com/v1/images/search?limit=15&page=${page}&order=DESC`, requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //     const catUrls = result.map((cat) => cat.url);
    //     setCats(catUrls);
    //   })
    //   .catch((error) => console.log('error', error));

    const loadMoreCats = async () => {
      // const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=15&page=${page}&order=DESC`;

      // try {
      //   const response = await fetch(apiUrl);
      //   const data = await response.json();

      //   // Обновление состояния котиков
      //   setCats((prevCats) => [...prevCats, ...data]);
      //   setPage((prevPage) => prevPage + 1);
      // } catch (error) {
      //   console.error('Ошибка при загрузке котиков:', error);
      // }

      fetch(url, {
        headers: {
          'x-api-key': apiKey,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setLoading(true);
          console.log(result);
          const catUrls = result.map((cat) => cat.url);
          // setCats(catUrls);
          setCats((prevCats) => [...prevCats, ...catUrls]);
          setPage((prevPage) => prevPage + 1);
        })
        .catch((error) => console.log('error', error))
        .finally(() => setLoading(false));
    };

    // Если пользователь достиг конца страницы, загружаем еще котиков
    // const handleScroll = () => {

    //   if (
    //     window.innerHeight + document.documentElement.scrollTop
    //       >= document.documentElement.offsetHeight - 100
    //       && !loading
    //   ) {
    //     setTimeout(() => {
    //       loadMoreCats();
    //     }, 5000);
    //   }
    // };
    // window.addEventListener('scroll', handleScroll);
    loadMoreCats();
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  useEffect(() => {
    // Обработка изменения loading
    if (!loading) {
      // Добавьте здесь логику, которую вы хотите выполнить после загрузки данных
    }
  }, [loading]);

  return (
    <body>
      <header>
        <div className="header">
          <nav>
            <button type="button" className="header_brn">Все котики</button>
            <button type="button" className="header_brn">Любимые котики</button>
          </nav>
        </div>
      </header>

      <main>
        <Cats catUrls={cats} />
      </main>
    </body>

  );
};

export default Main;
