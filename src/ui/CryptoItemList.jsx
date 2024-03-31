import { useEffect, useState } from 'react';
import CryptoItem from './CryptoItem';
import { useLoaderData } from 'react-router';

function ListOfCrypto() {
  // const [cryptos, setCryptos] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  const { top_50_cryptos } = useLoaderData();
  console.log(top_50_cryptos);

  return (
    <ul>
      {top_50_cryptos.map((crypto) => (
        <CryptoItem crypto={crypto} key={crypto.id} />
      ))}
    </ul>
  );
}

export default ListOfCrypto;
