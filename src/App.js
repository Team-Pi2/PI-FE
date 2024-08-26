import { useLocation, useMatch } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';

function App() {

  const currentLocation = useLocation();
  const isCommunitiesPage = useMatch('/communities/:id');

  const isOrderPage = currentLocation.pathname === '/order';
  const isStandbyPage = currentLocation.pathname.startsWith('/standby');
  const isCompletePage = currentLocation.pathname.startsWith('/complete');


  const showBottomBar = !isCommunitiesPage && !isOrderPage && !isStandbyPage && !isCompletePage;
  const showTopBar = !isCommunitiesPage;

  return (
    <div className="App">
      {showTopBar && <TopBar />}
      {showBottomBar && <BottomBar />}
      <div className='app-routes'>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
