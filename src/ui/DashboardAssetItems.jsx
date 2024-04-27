import { useMotionValue, Reorder } from 'framer-motion';
import { useRaisedShadow } from '../services/use-raised-shadow';

function DashboardAssetItems({ item }) {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item
      value={item}
      id={item}
      style={{ boxShadow, y }}
      className="flex items-center bg-stone-200 py-2 text-center text-xs hover:cursor-grab"
    >
      <p className="basis-1/4 border-x-2 px-6 text-center max-sm:hidden">
        {item.name}
      </p>
      <p className="basis-1/4 border-x-2 px-6 text-center sm:hidden">
        {item.symbol}
      </p>
      <p className="basis-1/4 border-x-2 px-6 text-center">{item.category}</p>
      <p className="basis-1/4 border-x-2 px-6">{item.worth}</p>
      <p className="basis-1/4 border-x-2 px-6">{item.notification}</p>
    </Reorder.Item>
  );
}

export default DashboardAssetItems;
