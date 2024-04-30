function Test() {
  return (
    <div className="mx-1 flex flex-col items-stretch gap-y-1 border-2 border-dashed border-red-300 px-1 py-1 text-white">
      <div className="border-2 border-dashed border-blue-300">
        <button className="w-1/2 bg-gray-500">1</button>
      </div>
      <div className="border-2 border-dashed border-blue-300">
        <button className="w-full bg-gray-500">2</button>
      </div>
      <div className="border-2 border-dashed border-blue-300">
        <button className="w-full bg-gray-500">3</button>
      </div>
      <div className="border-2 border-dashed border-blue-300">
        <button className="w-full bg-gray-500">4</button>
      </div>
    </div>
  );
}

export default Test;
