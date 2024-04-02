import { useLoaderData } from 'react-router';
import { currencyFormatter, numberFormatter } from '../services/formating';

function ListOfCrypto() {
  // const [cryptos, setCryptos] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  const { top_50_cryptos } = useLoaderData();

  return (
    <div className="flex">
      <table>
        <thead>
          <tr>
            <th className={'z-10'}>#</th>
            <th className={'z-10'}>Name</th>
          </tr>
        </thead>
        <tbody>
          {top_50_cryptos.map((crypto, i) => {
            return (
              <tr>
                <td className={'z-10'}>{i + 1}</td>
                <td className={'z-10'}>{crypto.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className={'overflow-x-auto'}>
        <table>
          <thead className={'text-right'}>
            <tr>
              <th>Price</th>
              <th>24h △</th>
              <th>7d △</th>
              <th>Market Cap</th>
              <th>Circulating Supply</th>
              <th>Max Supply</th>
            </tr>
          </thead>

          <tbody className={'text-right'}>
            {top_50_cryptos.map((crypto, i) => {
              return (
                <tr key={crypto.id}>
                  <td>{currencyFormatter(crypto.quote.USD.price)}</td>
                  <td>
                    {numberFormatter(crypto.quote.USD.percent_change_24h)}%
                  </td>
                  <td>
                    {numberFormatter(crypto.quote.USD.percent_change_7d)}%
                  </td>
                  <td>{currencyFormatter(crypto.quote.USD.market_cap)}</td>
                  <td>{currencyFormatter(crypto.circulating_supply)}</td>
                  <td>
                    {crypto.max_supply === null
                      ? 'Unlimited'
                      : currencyFormatter(crypto.max_supply)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListOfCrypto;
