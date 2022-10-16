import TopBanner from './components/TopBanner/TopBanner';
import Services from './components/Services/Services';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Charts from './components/Charts/Charts';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div>
    <TopNavigation />
    <TopBanner />
    <Services />
    <Charts/>
    <Summary/>
  </div>
  );
}

export default App;
