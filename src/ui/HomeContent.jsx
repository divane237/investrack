import MobileDownloadImage from './MobileDownloadImage';

// ../../public/images/cryptocurrencies-image.jpg
function HomeContent() {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(../../public/images/iPhone-15-Pro.png)`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `100% 100%`,
          backgroundPosition: `fixed`,
        }}
        className={
          'h-[550px] bg-center text-white sm:h-[700px] md:h-[900px] lg:h-[1000px]'
        }
      >
        <div
          className={
            'absolute top-[40%] ml-3 w-1/2 -translate-y-[40%] text-center md:ml-4'
          }
        >
          <h1
            className={
              'relative whitespace-nowrap text-base font-extrabold md:text-xl lg:text-3xl'
            }
          >
            All in{' '}
            <span
              className={'mx-1 font-serif text-4xl text-sky-500 md:text-8xl'}
            >
              1
            </span>{' '}
            Tracker
          </h1>
          <p className={'whitespace-pre-wrap text-base'}>
            You will be able to follow up with notifications from all you
            assets, worldwide news with us.
          </p>
        </div>
        <div
          className={
            'absolute bottom-[20%] left-[10%] -translate-x-[10%] translate-y-[20%] '
          }
        >
          <MobileDownloadImage />
        </div>
      </div>
      <div>Stocks</div>
    </div>
  );
}

export default HomeContent;
