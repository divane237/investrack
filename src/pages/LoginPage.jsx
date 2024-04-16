function LoginPage() {
  return (
    /*
after:absolute after:left-1/2 after:top-[100%] after:ml-[-5px] after:border-[10px] after:border-y-transparent after:border-l-transparent after:border-r-slate-600 after:content-['']
    */
    <div>
      Login Page
      <div className={'group relative'}>
        <p> This will have tool tip</p>
        <p
          className={
            "absolute left-1/4 top-0 hidden rounded-lg bg-slate-400 p-1 text-sm after:absolute after:left-0 after:top-0 after:-translate-x-5 after:translate-y-1 after:border-[10px] after:border-y-transparent after:border-l-transparent after:border-r-slate-600 after:content-[''] group-hover:block"
          }
        >
          Tool Tip here
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
