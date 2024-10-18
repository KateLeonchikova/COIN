import { el } from 'redom';

export function validateInputs(inputs, btn) {
  inputs.forEach((input) => {
    const errorMessage = el('span', { class: 'error-message' });
    input.parentElement.appendChild(errorMessage);

    input.addEventListener('blur', () => {
      const error = getValidationError(input);
      if (error) {
        input.classList.add('error');
        errorMessage.textContent = error;
      } else {
        input.classList.remove('error');
        errorMessage.textContent = '';
      }
      toggleSubmitButton(inputs, btn);
    });

    input.addEventListener('input', () => {
      input.classList.remove('error');
      errorMessage.textContent = '';
      toggleSubmitButton(inputs, btn);
    });
  });
}

// функция для проверки валидации
export function isInputValid(input) {
  const value = input.value.trim();
  return value.length >= 6 && !value.includes(' ');
}

// функция для получения типа ошибки
function getValidationError(input) {
  const value = input.value.trim();
  if (value.length < 6) {
    return 'Недостаточно символов. Минимум 6.';
  }
  if (value.includes(' ')) {
    return 'Недопустимые символы: пробелы.';
  }
  return '';
}

// переключение состояния кнопки отправки
function toggleSubmitButton(inputs, btn) {
  const allValid = inputs.every((input) => !getValidationError(input));
  btn.disabled = !allValid;
}
