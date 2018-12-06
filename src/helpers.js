export function formatPrice(pence) {
  return pence.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });
}
