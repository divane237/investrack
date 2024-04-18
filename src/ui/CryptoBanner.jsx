import CryptoNotificationAnimation from './CryptoNotificationAnimation';
import CryptoNews from './CryptoNews';
import { useLoaderData } from 'react-router';
function CryptoBanner() {
  const { top_50_cryptos, news } = useLoaderData();

  return (
    <div className={''}>
      <CryptoNotificationAnimation top_50_cryptos={top_50_cryptos} />
      <CryptoNews news={news} />
    </div>
  );
}

export default CryptoBanner;
