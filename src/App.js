import TopBanner from './components/TopBanner/TopBanner';
import Services from './components/Services/Services';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Charts from './components/Charts/Charts';
import Summary from './components/Summary/Summary';
import RecentProject from './components/RecentProject/RecentProject';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
    <TopNavigation />
    <TopBanner />
    <Services />
    <Charts/>
    <Summary/>
    <RecentProject/>
    <Courses />
    <Footer />
  </div>
  );
}

export default App;
