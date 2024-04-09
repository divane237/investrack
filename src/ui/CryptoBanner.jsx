import CryptoNotificationAnimation from './CryptoNotificationAnimation';
import CryptoNews from './CryptoNews';
function CryptoBanner({ top_50_cryptos, news }) {
  return (
    <div className={''}>
      <CryptoNotificationAnimation top_50_cryptos={top_50_cryptos} />
      <CryptoNews news={news} />
    </div>
  );
}

export default CryptoBanner;
