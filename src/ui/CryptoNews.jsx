// const news = [
//   {
//     aritcle_id: 'c6e7a0d01d3792215c372fd0762c21c7',
//     country: ['autralia'],
//     description:
//       "ASX investors are clearly still interested in the lithium space. The post Guess which ASX lithium share just rocketed 31% on an 'outstanding' find appeared first on The Motley Fool Australia.",
//     image_url:
//       'https://www.fool.com.au/wp-content/uploads/2022/02/rocket-5-16.9-1200x675.jpg',
//     keywords: ['share gainers', 'share gainers'],
//     language: 'english',
//     link: 'https://www.fool.com.au/2024/04/08/guess-which-asx-lithium-share-just-rocketed-31-on-an-outstanding-find/',
//     pubDate: '2024-04-08 02:13:21',
//     source_url: 'https://www.fool.com.au',
//     title:
//       "Guess which ASX lithium share just rocketed 31% on an 'outstanding' find",
//   },
// ];

import { useState } from 'react';

function CryptoNews({ news }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function showNextSlide() {
    // let newSlide = 0;
    // currentSlide === news.length ? newSlide : (newSlide = currentSlide + 1);
    const newSlide = currentSlide === news.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide((cur) => (cur = newSlide));
  }

  function showPreviousSlide() {
    // let newSlide = news.length;
    // currentSlide === 0 ? newSlide : (newSlide = currentSlide - 1);
    const newSlide = currentSlide === 0 ? news.length - 1 : currentSlide - 1;
    setCurrentSlide((cur) => (cur = newSlide));
  }

  console.log(news);
  return (
    // Outer div
    <div className={'relative h-[125px] p-3 md:mb-[5vw]'}>
      {/* Inner div controlling the image */}
      <div className={'relative'}>
        <h1 className={'text-center text-xs font-semibold lg:text-sm'}>
          {news[currentSlide].title}
        </h1>
        <p className={'mb-2 text-center text-xs'}>
          <span className="inline-block capitalize">
            {news[currentSlide].country}
          </span>
          , {news[currentSlide].pubDate}
        </p>
        <a href={news[currentSlide].link} target="_blank">
          <img
            src={news[currentSlide].image_url}
            className={
              'absolute left-1/2 h-fit w-1/4 -translate-x-1/2 hover:cursor-pointer sm:h-[80px] md:h-[100px]'
            }
          />
        </a>
      </div>

      {/* Chevron left and right */}
      <div
        className={
          'absolute bottom-0 right-0 z-10 -translate-y-1/2 transition-all duration-300 ease-in-out hover:cursor-pointer hover:rounded-full hover:bg-stone-100'
        }
        onClick={showNextSlide}
      >
        <svg width="45" height="45" viewBox="0 0 15 15" fill="none">
          <path
            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div
        className={
          'absolute bottom-0 left-0 z-10 -translate-y-1/2 transition-all  duration-300 ease-in-out hover:cursor-pointer hover:rounded-full hover:bg-stone-100'
        }
        onClick={showPreviousSlide}
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>

      {/* Button to slide as well */}
      {/* <div
        className={'absolute bottom-0 left-1/2 rounded-full hover:bg-stone-300'}
      >
        <svg width="10" height="10" viewBox="0 0 15 15" fill="none">
          <path
            d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div> */}
    </div>
  );
}

export default CryptoNews;

/*
{news.map((el, i) => {
        return (
          <div
            className={
              'left-1/2 w-1/2 translate-x-1/2 rounded-lg bg-sky-100 p-3'
            }
          >
            <h1 className={'text-justify text-xs font-semibold lg:text-sm'}>
              {el.title}
            </h1>
            <p className={'text-center text-xs'}>
              <span className="block capitalize">{el.country},</span>{' '}
              <span className={'font-medium'}>Date:{el.pubDate}</span>
            </p>

           
            <div
              className={
                'grid grid-cols-1 space-x-1 text-xs md:auto-cols-max md:grid-cols-2 md:text-justify'
              }
            >
              

              <img
                src={el.image_url}
                alt={el.title}
                className={'block h-[100px] w-full'}
              />

             
              <p className={'md:hidden'}>
                {`${el.description.slice(0, 50)}...`}{' '}
                <a href={el.link} className={'hover:text-stone-500'}>
                  read more
                </a>
              </p>
              <p className={'max-md:hidden'}>
                {`${el.description.slice(0, 500)}...`}{' '}
                <a href={el.link} className={'hover:text-stone-500'}>
                  read more
                </a>
              </p>
            </div>

*/
