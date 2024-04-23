function DashboardAssetItems({ el }) {
  return (
    <li className="mt-2 flex items-center">
      <p className="basis-1/4 border-x-2 px-6">{el.name}</p>
      <p className="basis-1/4 border-x-2 px-6">{el.category}</p>
      <p className="basis-1/4 border-x-2 px-6">{el.worth}</p>
      <p className="basis-1/4 border-x-2 px-6">{el.notification}</p>
    </li>
  );
}

export default DashboardAssetItems;
