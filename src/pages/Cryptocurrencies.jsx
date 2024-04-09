import { useLoaderData } from 'react-router';
import { getCrypto, getNews } from '../services/fetchCrypto';
import CryptoBanner from '../ui/CryptoBanner';
import CryptoItemList from '../ui/CryptoItemList';

function Cryptocurrencies() {
  const { top_50_cryptos, news } = useLoaderData();

  return (
    <div className={''}>
      <CryptoBanner top_50_cryptos={top_50_cryptos} news={news} />
      <CryptoItemList top_50_cryptos={top_50_cryptos} />
    </div>
  );
}

export default Cryptocurrencies;

export async function loader() {
  const top_50_cryptos = await getCrypto();
  const news = await getNews();

  return { top_50_cryptos, news };
}
