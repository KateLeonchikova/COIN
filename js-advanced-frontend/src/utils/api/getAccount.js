import { showSkeleton, hideSkeleton } from '../helpers/showAndHideSkeleton';

export async function getAccount(id) {
  const token = localStorage.getItem('token');
  showSkeleton();

  try {
    const response = await fetch(`http://localhost:3000/account/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Basic ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Ошибка при получении данных о счете');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  } finally {
    hideSkeleton();
  }
}