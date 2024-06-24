import { useLoaderData } from 'react-router';
import { currencyFormatter, numberFormatter } from '../services/formating';
import Button from './Button';
import StarIcon from './StarIcon';

function CryptoItemList() {
  const { top_50_cryptos } = useLoaderData();

  // console.log('https://cryptologos.cc/logos/${crypto.name}-${crypto.symbol}-logo.svg?v=032')
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
            <thead className={'border-b-2 bg-stone-100 text-sm font-semibold'}>
              <tr>
                <th className={'px-2.5 py-2.5'}></th>
                <th className={'px-2.5 py-2.5'}>#</th>
                <th className={'px-2.5 py-2.5'}>Name</th>
              </tr>
            </thead>

            {/* Body */}

            <tbody>
              {top_50_cryptos.map((crypto, i) => {
                return (
                  <tr key={crypto.id} className="border-gra-500 border-b-2 ">
                    <td className={'px-4 py-6'}>
                      {/* StarIcon */}

                      <div>
                        <StarIcon
                          hoverMsg="Add to portfolio"
                          starredMsg="Already in portfolio"
                          size={[20, 15]}
                        />
                      </div>
                    </td>

                    {/* Number of coins */}

                    <td className={'px-4'}>
                      <p>{i + 1}</p>
                    </td>

                    {/* Name, Symbol and Icon */}

                    <td
                      className={
                        'flex items-center justify-center gap-3 px-4 py-5'
                      }
                    >
                      <div className="max-h-[50px]">
                        <img
                          src={`https://cryptologos.cc/logos/${crypto.name.split(' ').join('-').toLowerCase()}-${crypto.symbol.toLowerCase()}-logo.svg?v=032`}
                          alt={crypto.name}
                          className="h-[30px] w-[30px]"
                        />
                      </div>

                      <span className={'sm:hidden'}>{crypto.symbol}</span>
                      <span className={'max-sm:hidden'}>{crypto.name}</span>
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
            <thead className={'border-b-2 bg-stone-100 text-sm font-semibold'}>
              <tr>
                <th className={'px-4 py-2.5'}>Price</th>
                <th className={'px-4 py-2.5'}>24h △</th>
                <th className={'px-4 py-2.5'}>7d △</th>
                <th className={'px-4 py-2.5'}>Market Cap</th>
                <th className={'px-4 py-2.5'}>Supply</th>
              </tr>
            </thead>

            {/* Body */}

            <tbody className={''}>
              {top_50_cryptos.map((crypto) => {
                const dailyChange = crypto.quote.USD.percent_change_24h;
                const weeklyChange = crypto.quote.USD.percent_change_7d;
                return (
                  <tr key={crypto.id} className="border-2 ">
                    <td className={'px-6 py-6'}>
                      <p>{currencyFormatter(crypto.quote.USD.price)}</p>
                    </td>
                    <td
                      className={`px-3 text-sm ${
                        dailyChange > 0
                          ? 'text-green-500'
                          : dailyChange < 0
                            ? 'text-red-500'
                            : ''
                      }`}
                    >
                      {' '}
                      {Math.abs(
                        numberFormatter(crypto.quote.USD.percent_change_24h),
                      )}
                      %
                    </td>
                    <td
                      className={`px-3 text-sm
                        ${
                          weeklyChange > 0
                            ? 'text-green-500'
                            : weeklyChange < 0
                              ? 'text-red-500'
                              : ''
                        }
                      `}
                    >
                      {Math.abs(
                        numberFormatter(crypto.quote.USD.percent_change_7d),
                      )}
                      %
                    </td>
                    <td className={'px-4'}>
                      {currencyFormatter(crypto.quote.USD.market_cap)}
                    </td>
                    <td className="flex h-[72px] flex-col items-center justify-center gap-2 px-4">
                      <span>{numberFormatter(crypto.circulating_supply)}</span>
                      {typeof crypto.max_supply === 'number' && (
                        <meter
                          value={crypto.circulating_supply / crypto.max_supply}
                          min={0}
                          max={1}
                        ></meter>
                      )}
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
