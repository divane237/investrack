function CryptoItem({ crypto }) {
  return (
    <li>
      <span>{crypto.name}</span>
      <span>{crypto.symbol}</span>
      <span>{crypto.quote.USD.price}</span>
    </li>
  );
}

export default CryptoItem;
