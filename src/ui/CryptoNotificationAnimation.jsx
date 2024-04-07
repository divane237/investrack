import { numberFormatter } from '../services/formating';

function CryptoNotificationAnimation({ top_50_cryptos }) {
  //
  // DISPLAYING JUST THE FIRST 10 CRYPTO CURRENCIES ON THE BANNER
  const top_10_cryptos = top_50_cryptos.slice(0, 10);

  console.log(top_10_cryptos);

  return (
    <div className={'flex w-full space-x-2 overflow-hidden text-xs'}>
      <ul className={'mt-4 flex animate-crypto-loop items-center space-x-5'}>
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
      <ul className={'mt-4 flex animate-crypto-loop items-center space-x-5'}>
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
    </div>
  );
}

export default CryptoNotificationAnimation;
