import { useEffect, useState } from 'react';
import CryptoItem from './CryptoItem';
const COINGECKO_API =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C%2024%2C%207d&locale=en&precision=2';

function ListOfCrypto() {
  const [cryptos, setCryptos] = useState([]);
  //
  useEffect(function () {
    async function getCryptoData() {
      const res = await fetch(COINGECKO_API);
      const data = await res.json();
      setCryptos(data);
    }

    getCryptoData();
  }, []);

  console.log(crypto);

  // const data = [
  //   {
  //     name: 'Bitcoin',
  //     symbol: 'BTC',
  //     id: 1,
  //   },
  //   {
  //     name: 'Ethereum',
  //     symbol: 'ETH',
  //     id: 2,
  //   },
  //   {
  //     name: 'Cadano',
  //     symbol: 'ADA',
  //     id: 3,
  //   },
  // ];

  return (
    <ul>
      {cryptos.map((crypto) => {
        return <CryptoItem crypto={crypto} key={crypto.id} />;
      })}
    </ul>
  );
}

export default ListOfCrypto;
