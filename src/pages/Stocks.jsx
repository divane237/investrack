import { useEffect } from 'react';
import Footer from '../ui/Footer';

function Stocks() {
  useEffect(function () {
    async function getStocks() {
      const res = await fetch(
        'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=tDe1YfRpGwDwYuy35wCdjDFOUF_0wcxi',
      );

      const data = await res.json();
      console.log(data);
    }

    getStocks();
  }, []);

  return (
    <div>
      Stocks
      <div className="-tanslate-y-full static bottom-0 w-full">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Stocks;
