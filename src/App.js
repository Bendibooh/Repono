import TopBanner from './components/TopBanner/TopBanner';
import Services from './components/Services/Services';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Charts from './components/Charts/Charts';
import Summary from './components/Summary/Summary';
import RecentProject from './components/RecentProject/RecentProject';
import Courses from './components/Courses/Courses';

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
  </div>
  );
}

export default App;
