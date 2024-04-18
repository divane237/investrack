import { useLoaderData } from 'react-router';
import { currencyFormatter, numberFormatter } from '../services/formating';
import Button from './Button';
import StarIcon from './StarIcon';

function CryptoItemList() {
  const { top_50_cryptos } = useLoaderData();
  return (
    <>
      <div className={'mx-4 mt-10 flex items-center'}>
        <div className={'flex text-sm md:text-base'}>
          {/* Filter 100, 500, 1000 and 5000 */}
          <p htmlFor="top-cryptos" className="p-2">
            Sort
          </p>
          <select
            name="number"
            className={
              'rounded-md  hover:cursor-pointer focus:outline-none focus:ring focus:ring-slate-300'
            }
          >
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={500}>500</option>
            <option value={1000}>1000</option>
            <option value={5000}>5000</option>
          </select>
        </div>

        {/* Sort Memes , Gaming and AI
         */}
        <div
          className={
            'flex overflow-x-scroll sm:overflow-x-hidden md:gap-10 lg:ml-40'
          }
        >
          <Button>
            <span>😂</span>Memes
          </Button>
          <Button>
            <span>🤖</span>AI
          </Button>
          <Button>
            <span>🎮</span>Gaming
          </Button>
        </div>
      </div>

      {/* Table of cryptocurrencies */}
      <div className={'mt-2 flex text-base'}>
        <div>
          <table className={'w-full whitespace-nowrap text-center'}>
            <thead className={'border-b-2 bg-stone-100 text-sm'}>
              <tr>
                <th className={'px-2.5 py-2.5'}></th>
                <th className={'px-2.5 py-2.5 font-semibold'}>#</th>
                <th className={'px-2.5 py-2.5 font-semibold'}>Name</th>
              </tr>
            </thead>

            {/* Body */}

            <tbody>
              {top_50_cryptos.map((crypto, i) => {
                return (
                  <tr key={crypto.id}>
                    <td className={'px-4 py-6'}>
                      <div>
                        <StarIcon
                          hoverMsg="Add to portfolio"
                          starredMsg="Already in portfolio"
                          size={[20, 15]}
                        />
                      </div>
                    </td>
                    <td className={'border-b-2 px-4 py-6'}>
                      <p>{i + 1}</p>
                    </td>
                    <td className={'border-b-2 px-4 py-6'}>
                      <span className={''}>ICON </span>
                      <span className={''}>{crypto.symbol}</span>
                      <span className={'max-sm:hidden'}>
                        {` ${crypto.name}`}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/*  */}

        <div className="grow basis-[80%] overflow-hidden hover:overflow-x-scroll">
          <table className={'w-full table-auto whitespace-nowrap text-center'}>
            <thead className={'border-b-2 bg-stone-100 text-sm '}>
              <tr>
                <th className={'px-4 py-2.5 font-semibold'}>Price</th>
                <th className={'px-4 py-2.5'}>24h △</th>
                <th className={'px-4 py-2.5'}>7d △</th>
                <th className={'px-4 py-2.5'}>Market Cap</th>
                <th className={'px-4 py-2.5'}>Circulating Supply</th>
                <th className={'px-4 py-2.5'}>Max Supply</th>
              </tr>
            </thead>

            {/* Body */}

            <tbody className={''}>
              {top_50_cryptos.map((crypto) => {
                const dailyChange = crypto.quote.USD.percent_change_24h;
                const weeklyChange = crypto.quote.USD.percent_change_7d;
                return (
                  <tr key={crypto.id}>
                    <td className={'border-b-2 px-4 py-6 '}>
                      <p>{currencyFormatter(crypto.quote.USD.price)}</p>
                    </td>
                    <td
                      className={
                        dailyChange > 0
                          ? 'text-gr border-b-2 px-4 py-6 text-sm text-green-500'
                          : dailyChange < 0
                            ? 'text- border-b-2 px-4 py-6 text-sm text-red-500'
                            : 'text-st border-b-2 px-4 py-6 text-sm'
                      }
                    >
                      <p>
                        {' '}
                        {Math.abs(
                          numberFormatter(crypto.quote.USD.percent_change_24h),
                        )}
                        %
                      </p>
                    </td>
                    <td
                      className={
                        weeklyChange > 0
                          ? 'text-gr border-b-2 px-4 py-6 text-sm text-green-500'
                          : weeklyChange < 0
                            ? 'text- border-b-2 px-4 py-6 text-sm text-red-500'
                            : 'text-st border-b-2 px-4 py-6 text-sm'
                      }
                    >
                      {Math.abs(
                        numberFormatter(crypto.quote.USD.percent_change_7d),
                      )}
                      %
                    </td>
                    <td className={'border-b-2 px-4 py-6'}>
                      {currencyFormatter(crypto.quote.USD.market_cap)}
                    </td>
                    <td className={'border-b-2 px-4 py-6'}>
                      {currencyFormatter(crypto.circulating_supply)}
                    </td>
                    <td className={'border-b-2 px-4 py-6 '}>
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
    </>
  );
}

export default CryptoItemList;
