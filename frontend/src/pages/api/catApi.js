const getCats = async (page) => {
  const url = `https://api.thecatapi.com/v1/images/search?limit=15&page=${page}`;
  const apiKey = 'live_e9ngBAgHEUKtb9uhZTSWTZw505eTv7bX7I9tmAKxU9TYfZP52TqGXBjDnqSYBrIK';

  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey,
      },
    });
    const data = await response.json();
    return data; // Возвращаем данные в случае успеха
  } catch (error) {
    console.log('error', error);
    throw error; // Генерируем ошибку для указания неудачи
  }
};

export default getCats;
