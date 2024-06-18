import Dashboard from '../ui/Dashboard';
import Footer from '../ui/Footer';

function Portfolio() {
  return (
    <div className="h-[82dvh] overflow-x-hidden border-2 border-solid border-green-700">
      <Dashboard />

      <div className="fixed bottom-0 w-full ">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Portfolio;
