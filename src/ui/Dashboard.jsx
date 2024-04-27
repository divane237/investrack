import { useState } from 'react';
import { Reorder } from 'framer-motion';
import DashboardAssetItems from './DashboardAssetItems';

const initialItems = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    category: 'crypto',
    worth: 100,
    notification: 'alert',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    category: 'crypto',
    worth: 300,
    notification: 'alert',
  },
  {
    name: 'Tesla',
    symbol: 'TSLA',
    category: 'stock',
    worth: 500,
    notification: 'none',
  },
  {
    name: 'Microsoft',
    symbol: 'MSFT',
    category: 'stock',
    worth: 100,
    notification: 'none',
  },
  {
    name: 'Apple',
    symbol: 'AAPL',
    category: 'stock',
    worth: 500,
    notification: 'alert',
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    category: 'crypto',
    worth: 50,
    notification: 'none',
  },
];

function Dashboard() {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="mb-3 ml-1 mr-1 mt-4">
      <div className="flex w-full">
        {/* Want to display name and other basic infos */}

        <section className="basis-1/2 md:basis-1/3">
          <p>Name:</p>
          <p>ID:</p>
          <p>AvatarName:</p>
        </section>

        {/* Want to display a chart of portfolio distribution */}

        <section className="basis-1/2 bg-red-300 md:basis-2/3">
          <div>CHART OF PORTFOLIO</div>
        </section>
      </div>

      {/* Table displaying assets */}

      <div className="mb-1 mt-2 flex items-center">
        <h1 className="basis-1/4 border-x-2 px-6 text-center">Name</h1>
        <h1 className="flex basis-1/4 justify-center border-r-2 px-6">
          <p className="max-sm:hidden">Category</p>{' '}
          <span className="sm:hidden">
            <svg width="25" height="25" viewBox="0 0 15 15" fill="none">
              <path
                d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </h1>
        <h1 className="flex basis-1/4 justify-center px-6">
          <p className="max-sm:hidden">Worth ($)</p>{' '}
          <span className="cursor-default text-xl sm:hidden">💲</span>
        </h1>
        <h1 className="flex basis-1/4 justify-center border-x-2 px-6">
          <p className="max-sm:hidden">Notification</p>
          <span className="sm:hidden">
            <svg width="25" height="25" viewBox="0 0 15 15" fill="none">
              <path
                d="M8.60124 1.25086C8.60124 1.75459 8.26278 2.17927 7.80087 2.30989C10.1459 2.4647 12 4.41582 12 6.79999V10.25C12 11.0563 12.0329 11.7074 12.7236 12.0528C12.931 12.1565 13.0399 12.3892 12.9866 12.6149C12.9333 12.8406 12.7319 13 12.5 13H8.16144C8.36904 13.1832 8.49997 13.4513 8.49997 13.75C8.49997 14.3023 8.05226 14.75 7.49997 14.75C6.94769 14.75 6.49997 14.3023 6.49997 13.75C6.49997 13.4513 6.63091 13.1832 6.83851 13H2.49999C2.2681 13 2.06664 12.8406 2.01336 12.6149C1.96009 12.3892 2.06897 12.1565 2.27638 12.0528C2.96708 11.7074 2.99999 11.0563 2.99999 10.25V6.79999C2.99999 4.41537 4.85481 2.46396 7.20042 2.3098C6.73867 2.17908 6.40036 1.75448 6.40036 1.25086C6.40036 0.643104 6.89304 0.150421 7.5008 0.150421C8.10855 0.150421 8.60124 0.643104 8.60124 1.25086ZM7.49999 3.29999C5.56699 3.29999 3.99999 4.86699 3.99999 6.79999V10.25L4.00002 10.3009C4.0005 10.7463 4.00121 11.4084 3.69929 12H11.3007C10.9988 11.4084 10.9995 10.7463 11 10.3009L11 10.25V6.79999C11 4.86699 9.43299 3.29999 7.49999 3.29999Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>{' '}
        </h1>
      </div>

      {/*  */}
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {/* <ul className="flex flex-col bg-blue-200"> */}
        {items.map((item) => {
          return <DashboardAssetItems key={item.name} item={item} />;
        })}
        {/* </ul> */}
      </Reorder.Group>
    </div>
  );
}

export default Dashboard;
