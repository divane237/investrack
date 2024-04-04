import CryptoNotificationAnimation from './CryptoNotificationAnimation';

function CryptoBanner({ top_50_cryptos }) {
  return (
    <div>
      <CryptoNotificationAnimation top_50_cryptos={top_50_cryptos} />

      <div>
        <div>News</div>

        <div>Articles</div>
        <div> Some content</div>
      </div>
    </div>
  );
}

export default CryptoBanner;
