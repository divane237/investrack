import { useMotionValue, Reorder, useDragControls } from 'framer-motion';
import { useRaisedShadow } from '../services/use-raised-shadow';
import DraggableIcon from './DraggableIcon';
import DeleteIconButton from './DeleteIconButton';
import { motion } from 'framer-motion';
import { useState } from 'react';

function DashboardAssetItems({ item }) {
  const [deletedItem, setDeletedItem] = useState();

  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const controls = useDragControls();

  return (
    <>
      <Reorder.Item
        value={item}
        dragListener={false}
        dragControls={controls}
        style={{ boxShadow, y }}
        drag="y"
        className="flex h-[50px] border-2 border-dashed border-blue-600"
      >
        <DeleteIconButton
          onClick={(e) => {
            console.log(e.target.id);
          }}
          id={item.name}
        />
        <motion.div
          className="absolute flex w-full grow bg-red-200"
          drag="x"
          dragConstraints={{ left: 0, right: 30 }}
        >
          <DraggableIcon controls={controls} />
          <p className="flex basis-1/4 justify-center bg-blue-500 px-2 text-center max-sm:hidden">
            <span className="select-none">{item.name}</span>
          </p>
          <p className="flex basis-1/4 justify-center sm:hidden">
            <span className="select-none"> {item.symbol}</span>
          </p>
          <p className="flex basis-1/4 select-none justify-center bg-green-500 px-2 text-center">
            {item.category}
          </p>
          <p className="flex basis-1/4 select-none justify-center bg-yellow-500 px-2">
            {item.worth}
          </p>
          <p className="flex basis-1/4 select-none justify-center bg-purple-500 px-2">
            {item.notification}
          </p>
        </motion.div>
      </Reorder.Item>
    </>
  );
}

export default DashboardAssetItems;

/* 

<Reorder.Item
        value={item}
        id={item}
        drag
        dragConstraints={{ left: 0, right: 1 }}
        style={{ boxShadow, y }}
        className="absolute left-0 flex w-full items-center bg-stone-100 py-2 text-center text-xs"
      >
        <p className="flex basis-1/4 justify-start px-6 max-sm:hidden">
          <span className="select-none">{item.name}</span>
        </p>
        <p className="basis-1/4 px-6 text-center sm:hidden">
          <span className="select-none"> {item.symbol}</span>
        </p>
        <p className="basis-1/4 select-none px-6 text-center">
          {item.category}
        </p>
        <p className="basis-1/4 select-none px-6">{item.worth}</p>
        <p className="basis-1/4 select-none px-6">{item.notification}</p>
      </Reorder.Item>

*/
