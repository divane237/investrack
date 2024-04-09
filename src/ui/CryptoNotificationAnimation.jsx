import { numberFormatter } from '../services/formating';

function CryptoNotificationAnimation({ top_50_cryptos }) {
  //
  // DISPLAYING JUST THE FIRST 10 CRYPTO CURRENCIES ON THE BANNER
  const top_10_cryptos = top_50_cryptos.slice(0, 10);

  return (
    <div
      className={
        'group relative left-1/2 top-1/2 flex -translate-x-1/2 gap-9 overflow-hidden rounded-full bg-stone-200 text-xs hover:cursor-pointer'
      }
    >
      <ul
        className={
          'ml-10 mt-4 flex animate-crypto-loop items-center gap-x-4 space-x-5 group-hover:cursor-pointer group-hover:[animation-play-state:paused]'
        }
      >
        {top_10_cryptos.map((crypto) => {
          const hourlyChange = numberFormatter(
            crypto.quote.USD.percent_change_1h,
          );
          return (
            <li key={crypto.id} className={'flex gap-1'}>
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox={hourlyChange >= 0 ? '0 -2 13 09' : '0 -1 10 14'}
                  fill="none"
                >
                  <g>
                    <path
                      d={
                        hourlyChange >= 0
                          ? 'M6.5 0L12.1292 9.75H0.870835L6.5 0Z'
                          : 'M6.5 13L0.870834 3.25L12.1292 3.25L6.5 13Z'
                      }
                      fill={
                        hourlyChange > 0
                          ? '#13B119'
                          : hourlyChange < 0
                            ? '#F21414'
                            : '#a09f9f'
                      }
                    />
                  </g>
                </svg>
              </span>

              <p
                className={
                  hourlyChange > 0
                    ? 'text-green-500'
                    : hourlyChange < 0
                      ? 'text-red-600'
                      : ''
                }
              >
                {Math.abs(hourlyChange)}
              </p>
              <p>{crypto.symbol} </p>
            </li>
          );
        })}
      </ul>
      {/* Second identical element */}
      <ul
        className={
          'mt-4 flex animate-crypto-loop items-center gap-x-4 space-x-5 group-hover:cursor-pointer group-hover:[animation-play-state:paused]'
        }
      >
        {top_10_cryptos.map((crypto) => {
          const hourlyChange = numberFormatter(
            crypto.quote.USD.percent_change_1h,
          );
          return (
            <li key={crypto.id} className={'flex gap-1'}>
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox={hourlyChange >= 0 ? '0 -2 13 09' : '0 -1 10 14'}
                  fill="none"
                >
                  <g>
                    <path
                      d={
                        hourlyChange >= 0
                          ? 'M6.5 0L12.1292 9.75H0.870835L6.5 0Z'
                          : 'M6.5 13L0.870834 3.25L12.1292 3.25L6.5 13Z'
                      }
                      fill={
                        hourlyChange > 0
                          ? '#13B119'
                          : hourlyChange < 0
                            ? '#F21414'
                            : '#a09f9f'
                      }
                    />
                  </g>
                </svg>
              </span>

              <p
                className={
                  hourlyChange > 0
                    ? 'text-green-500'
                    : hourlyChange < 0
                      ? 'text-red-600'
                      : ''
                }
              >
                {Math.abs(hourlyChange)}
              </p>
              <p>{crypto.symbol} </p>
            </li>
          );
        })}
      </ul>

      <div
        className={
          'absolute left-0 top-0 block w-[40px] border-none bg-gradient-to-r from-stone-50 to-stone-200 p-4'
        }
      ></div>
      <div
        className={
          'absolute right-0 top-0 block w-[40px] border-none bg-gradient-to-l from-stone-50 to-stone-200 p-4'
        }
      ></div>
    </div>
  );
}

export default CryptoNotificationAnimation;
