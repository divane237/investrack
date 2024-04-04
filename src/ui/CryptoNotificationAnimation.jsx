import { numberFormatter } from '../services/formating';

function CryptoNotificationAnimation({ top_50_cryptos }) {
  //
  // DISPLAYING JUST THE FIRST 10 CRYPTO CURRENCIES ON THE BANNER
  const top_10_cryptos = top_50_cryptos.slice(0, 10);

  console.log(top_10_cryptos);

  return (
    <div className={'overflow-x-scroll px-5 py-3 text-xs'}>
      <ul className={'flex items-center justify-between'}>
        {top_10_cryptos.map((crypto) => {
          const hourlyPercentage = numberFormatter(
            crypto.quote.USD.percent_change_1h,
          );
          return (
            <li key={crypto.id} className={'flex gap-1'}>
              <p>{crypto.symbol} </p>
              <span>
                <svg
                  width="14"
                  height="12"
                  viewBox={hourlyPercentage >= 0 ? '0 0 13 09' : '0 0 13 13'}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d={
                        hourlyPercentage >= 0
                          ? 'M6.5 0L12.1292 9.75H0.870835L6.5 0Z'
                          : 'M6.5 13L0.870834 3.25L12.1292 3.25L6.5 13Z'
                      }
                      fill={
                        hourlyPercentage > 0
                          ? '#13B119'
                          : hourlyPercentage < 0
                            ? '#F21414'
                            : '#a09f9f'
                      }
                    />
                  </g>
                </svg>
              </span>

              <p
                className={
                  hourlyPercentage === 0
                    ? 'text-black'
                    : hourlyPercentage > 0
                      ? 'text-green-500'
                      : 'text-red-600'
                }
              >
                {Math.abs(hourlyPercentage)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CryptoNotificationAnimation;
