import { showSkeleton, hideSkeleton } from '../helpers/showAndHideSkeleton';

export async function getAccounts() {
  const token = localStorage.getItem('token');
  const cacheKey = 'accountsData';
  showSkeleton();

  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    hideSkeleton();
    return JSON.parse(cachedData);
  }

  try {
    const response = await fetch('http://localhost:3000/accounts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Basic ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Ошибка при получении данных о счетах');
    }

    const data = await response.json();
    localStorage.setItem(cacheKey, JSON.stringify(data));

    return data;
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  } finally {
    hideSkeleton();
  }
}