import { useEffect, useState } from 'react';
import CryptoItem from './CryptoItem';
import { fetchCrypto } from '../services/fetchCrypto';

function ListOfCrypto() {
  const [cryptos, setCryptos] = useState([]);

  const data = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      id: 1,
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      id: 2,
    },
    {
      name: 'Cadano',
      symbol: 'ADA',
      id: 3,
    },
  ];

  useEffect(function () {
    // setCryptos(fetchCrypto());
    fetchCrypto();
  }, []);

  return (
    <ul>
      {data.map((crypto) => {
        return <CryptoItem crypto={crypto} key={crypto.id} />;
      })}
    </ul>
  );
}

export default ListOfCrypto;
