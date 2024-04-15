function Button({ children, onClick, type = 'primary', width = 100 }) {
  return (
    <button
      className={`w-[${width}px] rounded-md px-4 py-2 text-base hover:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-400`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
