import MobileDownloadImage from './MobileDownloadImage';

// ../../public/images/cryptocurrencies-image.jpg
function HomeContent() {
  return (
    <div className={'mb-4'}>
      <div className="relative">
        {/* First Section */}
        <div
          style={{
            backgroundImage: `url(../../public/images/iPhone-15-Pro.png)`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `100% 100%`,
            backgroundPosition: `fixed`,
          }}
          className={
            'mb-4 h-[550px] bg-center text-white sm:h-[700px] md:h-[900px] lg:h-[1000px]'
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
      </div>

      {/*  */}

      <div
        className={
          'flex flex-col items-center justify-center gap-y-8 md:flex-row md:justify-around'
        }
      >
        {/* Second section */}

        {/* Part 1 */}
        <div className={'flex flex-col items-center text-center md:basis-1/3'}>
          {/* Part 1 */}
          <div className="mb-2 h-[150px] w-[150px] overflow-hidden">
            <img src="/images/it-icons-fast.png" alt="account creation" />
          </div>
          <div>
            <h1 className={'text-xl font-semibold'}>Get Started Fast</h1>
            <p className={'text-sm'}>
              Signup fast and begin getting instant notifications
            </p>
          </div>
        </div>
        {/*  */}
        <div className={'flex flex-col items-center text-center md:basis-1/3'}>
          {/* Part 2 */}
          <div className="mb-2 h-[150px] w-[150px] overflow-hidden">
            <img src="/images/monitor-your-money.jpg" alt="account creation" />
          </div>
          <div>
            <h1 className={'text-xl font-semibold'}>
              Personal Portfolio Management
            </h1>
            <p className={'text-sm'}>
              Signup fast and begin getting instant notifications
            </p>
          </div>
        </div>
        {/*  */}
        <div className={'flex flex-col items-center text-center md:basis-1/3'}>
          {/* Part 3 */}
          <div className="mb-2 h-[150px] w-[150px] overflow-hidden">
            <img
              src="/images/Star-Your-assets.png"
              alt="star your assets"
              className={'rounded-[20rem]'}
            />
          </div>
          <div>
            <h1 className={'text-xl font-semibold '}>Specific Assets</h1>
            <p className={'text-sm'}>
              Signup fast and begin getting instant notifications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
