import { getCrypto } from '../services/fetchCrypto';
import CryptoBanner from '../ui/CryptoBanner';
import ListOfCrypto from '../ui/CryptoItemList';

function Cryptocurrencies() {
  return (
    <div>
      <CryptoBanner />
      <ListOfCrypto />
    </div>
  );
}

export default Cryptocurrencies;

export async function loader() {
  const top_50_cryptos = await getCrypto();
  return { top_50_cryptos };
}
