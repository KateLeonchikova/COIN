import IMask from 'imask';

export function createMaskedInput(element) {
  const maskOptions = {
    mask: Number,
    scale: 15,
    thousandsSeparator: ' ',
    radix: '.',
    mapToRadix: [','],
  };

  const mask = IMask(element, maskOptions);

  return mask;
}
