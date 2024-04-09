import { currencyFormatter, numberFormatter } from '../services/formating';

function CryptoItemList({ top_50_cryptos }) {
  return (
    <div className={'mt-6 flex'}>
      <div className="flex-[1_1_20%]">
        <table className={'w-full table-auto text-right'}>
          <thead className={'border-b-2 bg-stone-100'}>
            <tr>
              <th className={'py-3 text-sm font-medium'}></th>
              <th className={'py-3 text-sm font-medium'}>
                <p className={'text-center'}>#</p>
              </th>
              <th className={'py-3 text-sm font-medium'}>
                <p className={'text-right'}>Name</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {top_50_cryptos.map((crypto, i) => {
              return (
                <tr key={crypto.id}>
                  <td className={'p-2 text-center text-sm'}>⭐</td>
                  <td className={'border-b-2 p-2 text-xs text-stone-700'}>
                    <p>{i + 1}</p>
                  </td>
                  <td
                    className={
                      'space-x-2 border-b-2 p-4 text-right text-xs text-stone-700'
                    }
                  >
                    <span className={'whitespace-nowrap text-xs'}>ICON </span>
                    <span className={'whitespace-nowrap text-xs'}>
                      {crypto.symbol}
                    </span>
                    <span
                      className={'whitespace-nowrap text-right max-sm:hidden'}
                    >
                      {crypto.name}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/*  */}

      <div className="flex-[1_1_50%] overflow-hidden hover:overflow-x-scroll sm:flex-[1_1_70%]">
        <table className={'w-full table-auto text-right'}>
          <thead className={'border-b-2 bg-stone-100'}>
            <tr>
              <th className={'py-3 text-sm font-medium tracking-wide sm:py-3'}>
                Price
              </th>
              <th
                className={
                  'whitespace-nowrap py-3 text-xs font-medium tracking-wide sm:py-3'
                }
              >
                24h △
              </th>
              <th
                className={
                  'whitespace-nowrap py-3 text-xs font-medium tracking-wide sm:py-3'
                }
              >
                7d △
              </th>
              <th className={'py-3 text-xs font-medium tracking-wide sm:py-3'}>
                Market Cap
              </th>
              <th
                className={
                  'whitespace-nowrap py-3 text-xs font-medium tracking-wide sm:py-3'
                }
              >
                Circulating Supply
              </th>
              <th
                className={'whitespace-nowrap py-3 text-xs font-medium sm:py-3'}
              >
                Max Supply
              </th>
            </tr>
          </thead>
          <tbody className={'text-right'}>
            {top_50_cryptos.map((crypto) => {
              const dailyChange = crypto.quote.USD.percent_change_24h;
              const weeklyChange = crypto.quote.USD.percent_change_7d;
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
                  <td
                    className={
                      dailyChange > 0
                        ? 'border-b-2 p-4 text-xs text-green-500 '
                        : dailyChange < 0
                          ? 'border-b-2 p-4 text-xs text-red-600'
                          : 'border-b-2 p-4 text-xs text-stone-700'
                    }
                  >
                    {Math.abs(
                      numberFormatter(crypto.quote.USD.percent_change_24h),
                    )}
                    %
                  </td>
                  <td
                    className={
                      weeklyChange > 0
                        ? 'border-b-2 p-4 text-xs text-green-500 '
                        : weeklyChange < 0
                          ? 'border-b-2 p-4 text-xs text-red-600'
                          : 'border-b-2 p-4 text-xs text-stone-700'
                    }
                  >
                    {Math.abs(
                      numberFormatter(crypto.quote.USD.percent_change_7d),
                    )}
                    %
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
