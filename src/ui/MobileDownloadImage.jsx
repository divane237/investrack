function MobileDownloadImage() {
  return (
    <div className="lg:hidden">
      <p className={'text-xl'}>Download now </p>
      <div className={'mt-5 flex flex-col gap-y-3 sm:flex-row sm:gap-x-3'}>
        <button className="group w-4/5">
          <p
            className={
              'hidden whitespace-nowrap text-[0.5rem] font-semibold text-red-500 group-hover:block'
            }
          >
            Not available at the moment
          </p>
          <img src="/images/app-store.png" alt="apple store" width={'150px'} />
        </button>
        <button className="group w-4/5">
          <p
            className={
              'hidden whitespace-nowrap text-[0.5rem] font-semibold text-red-500 group-hover:block'
            }
          >
            Not available at the moment
          </p>
          <img
            src="/images/google-playstore.png"
            alt="google playstore"
            width={'150px'}
          />
        </button>
      </div>
    </div>
  );
}

export default MobileDownloadImage;
