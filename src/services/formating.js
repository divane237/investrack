export function currencyFormatter(amount) {
  const convertAmount = Number(amount);

  // Format the price above to USD using the locale, style, and currency.
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return USDollar.format(convertAmount);
}

export function numberFormatter(number) {
  return new Intl.NumberFormat('en-US').format(number);
}
