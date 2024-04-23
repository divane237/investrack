import { DndContext } from '@dnd-kit/core';
import Dashboard from '../ui/Dashboard';

function Portfolio() {
  return (
    <>
      <DndContext>
        <Dashboard />
      </DndContext>
    </>
  );
}

export default Portfolio;
