import CryptoNotificationAnimation from './CryptoNotificationAnimation';

function CryptoBanner({ top_50_cryptos }) {
  return (
    <>
      <CryptoNotificationAnimation top_50_cryptos={top_50_cryptos} />
      <div>News slider</div>
    </>
  );
}

export default CryptoBanner;
