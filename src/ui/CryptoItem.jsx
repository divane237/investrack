function CryptoItem({ crypto }) {
  return (
    <li>
      <h1>{crypto.name}</h1>
      <p>{crypto.symbol}</p>
    </li>
  );
}

export default CryptoItem;
