export function formatPrice(cents) {
  return cents.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });
}
