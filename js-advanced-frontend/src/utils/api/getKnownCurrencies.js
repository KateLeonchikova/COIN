import { showSkeleton, hideSkeleton } from '../helpers/showAndHideSkeleton';

export async function getKnownCurrencies() {
  showSkeleton();

  try {
    const response = await fetch('http://localhost:3000/all-currencies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Ошибка при получении данных о валютах');
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
