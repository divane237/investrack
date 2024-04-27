import Footer from '../ui/Footer';
import HomeContent from '../ui/HomeContent';

function Homepage() {
  return (
    <div>
      {' '}
      <HomeContent />
      <div className="-tanslate-y-full static bottom-0 w-full">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Homepage;
