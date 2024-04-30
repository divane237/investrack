import Dashboard from '../ui/Dashboard';
import DeleteIconButton from '../ui/DeleteIconButton';
import Footer from '../ui/Footer';

function Portfolio() {
  return (
    <div className="overflow-hidden">
      <Dashboard />

      <div className="-tanslate-y-full fixed bottom-0 w-full">
        <DeleteIconButton fill={true} color={'red'} />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Portfolio;
