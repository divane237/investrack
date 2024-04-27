import { getCrypto, getNews } from '../services/fetchCrypto';
import CryptoBanner from '../ui/CryptoBanner';
import CryptoItemList from '../ui/CryptoItemList';
import Footer from '../ui/Footer';

function Cryptocurrencies() {
  return (
    <div className={''}>
      <CryptoBanner />

      <CryptoItemList />

      <div className="-tanslate-y-full static bottom-0 w-full">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Cryptocurrencies;

export async function loader() {
  const top_50_cryptos = await getCrypto();
  const news = await getNews();

  return { top_50_cryptos, news };
}
