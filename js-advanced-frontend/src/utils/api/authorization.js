import { showSkeleton, hideSkeleton } from '../helpers/showAndHideSkeleton';

export async function authorization(loginValue, passwordValue) {
  showSkeleton();

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login: loginValue, password: passwordValue }),
    });

    if (response.ok) {
      const data = await response.json();

      if (data.error) {
        return { success: false, error: data.error };
      } else {
        const { token } = data.payload;
        localStorage.setItem('token', token);
        return { success: true, data };
      }
    } else {
      return { success: false, error: 'Ошибка сети или сервера' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  } finally {
    hideSkeleton();
  }
}