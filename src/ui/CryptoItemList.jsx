import { useLoaderData } from 'react-router';
import { currencyFormatter, numberFormatter } from '../services/formating';

function CryptoItemList() {
  // const [cryptos, setCryptos] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  const { top_50_cryptos } = useLoaderData();

  console.log(top_50_cryptos);

  return (
    <div className={'flex'}>
      <div className="flex-[1_1_55%]">
        <table className={'w-full table-auto  text-right'}>
          <colgroup>
            {/* <col className={'bg-green-500 sm:bg-green-100'} />
            <col className={'bg-red-500'} />
            <col className={'w-3/5 bg-yellow-500'} /> */}
          </colgroup>
          <thead className={'border-b-2 bg-stone-100'}>
            <tr>
              <th className={'py-3 text-sm font-semibold'}></th>
              <th className={'py-3 text-sm font-semibold'}>
                <p>#</p>
              </th>
              <th className={'py-3 text-sm font-semibold'}>
                <p className={''}>Name</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {top_50_cryptos.map((crypto, i) => {
              return (
                <tr key={crypto.id}>
                  <td className={' p-2 text-center text-sm'}>⭐</td>
                  <td className={'border-b-2 p-2 text-xs text-stone-700'}>
                    <p>{i + 1}</p>
                  </td>
                  <td
                    className={
                      'space-x-2 border-b-2  p-4 text-xs text-stone-700'
                    }
                  >
                    {/* <span className={'text-xs'}>ICON </span> */}
                    <span className={'text-xs'}>{crypto.symbol}</span>
                    <span className={'max-sm:hidden'}>{crypto.name}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/*  */}

      <div className="flex-[0_0_60%] overflow-x-scroll sm:flex-[0_0_70%]">
        <table className={'w-full table-auto text-right'}>
          <thead className={'border-b-2 bg-stone-100'}>
            <tr>
              <th
                className={'py-3 text-sm font-semibold tracking-wide sm:py-3'}
              >
                Price
              </th>
              <th
                className={'py-3 text-xs font-semibold tracking-wide sm:py-3'}
              >
                24h △
              </th>
              <th
                className={'py-3 text-xs font-semibold tracking-wide sm:py-3'}
              >
                7d △
              </th>
              <th
                className={'py-3 text-xs font-semibold tracking-wide sm:py-3'}
              >
                Market Cap
              </th>
              <th
                className={'py-3 text-xs font-semibold tracking-wide sm:py-3'}
              >
                Circulating Supply
              </th>
              <th className={'py-3 text-xs font-semibold sm:py-3'}>
                Max Supply
              </th>
            </tr>
          </thead>
          <tbody className={'text-right'}>
            {' '}
            {top_50_cryptos.map((crypto) => {
              return (
                <tr key={crypto.id} className={'text-right'}>
                  <td
                    className={
                      'border-b-2 p-4 text-right text-xs text-stone-700'
                    }
                  >
                    <p className={'text-right'}>
                      {currencyFormatter(crypto.quote.USD.price)}
                    </p>
                  </td>
                  <td className={'border-b-2 p-4 text-xs text-stone-700'}>
                    {numberFormatter(crypto.quote.USD.percent_change_24h)}%
                  </td>
                  <td className={'border-b-2 p-4 text-xs text-stone-700'}>
                    {numberFormatter(crypto.quote.USD.percent_change_7d)}%
                  </td>
                  <td className={'border-b-2 p-4 text-xs text-stone-700'}>
                    {currencyFormatter(crypto.quote.USD.market_cap)}
                  </td>
                  <td className={'border-b-2 p-4 text-xs text-stone-700'}>
                    {currencyFormatter(crypto.circulating_supply)}
                  </td>
                  <td className={'border-b-2 p-4 text-xs text-stone-700'}>
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

export default CryptoItemList;
