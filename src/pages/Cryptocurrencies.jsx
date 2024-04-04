import { useLoaderData } from 'react-router';
import { getCrypto } from '../services/fetchCrypto';
import CryptoBanner from '../ui/CryptoBanner';
import CryptoItemList from '../ui/CryptoItemList';

function Cryptocurrencies() {
  const { top_50_cryptos } = useLoaderData();

  return (
    <div className={''}>
      <CryptoBanner top_50_cryptos={top_50_cryptos} />
      <CryptoItemList top_50_cryptos={top_50_cryptos} />
    </div>
  );
}

export default Cryptocurrencies;

export async function loader() {
  const top_50_cryptos = await getCrypto();
  return { top_50_cryptos };
}
