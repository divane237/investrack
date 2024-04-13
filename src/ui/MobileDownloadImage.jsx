function MobileDownloadImage() {
  return (
    <div className="lg:hidden">
      <p className={'text-xl'}>Download now </p>
      <div className={'mt-5 flex flex-col gap-y-3 sm:flex-row sm:gap-x-3'}>
        <button className="w-4/5">
          <img src="/images/app-store.png" alt="apple store" width={'150px'} />
        </button>
        <button className="w-4/5">
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
