export async function getChangedCurrency() {
  return new WebSocket('ws://localhost:3000/currency-feed');
}
