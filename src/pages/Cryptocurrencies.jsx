import { getCrypto, getNews } from '../services/fetchCrypto';
import CryptoBanner from '../ui/CryptoBanner';
import CryptoItemList from '../ui/CryptoItemList';

function Cryptocurrencies() {
  return (
    <div className={''}>
      <CryptoBanner />

      <CryptoItemList />
    </div>
  );
}

export default Cryptocurrencies;

export async function loader() {
  const top_50_cryptos = await getCrypto();
  const news = await getNews();

  return { top_50_cryptos, news };
}
