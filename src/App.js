import { BrowserRouter, useLocation, useMatch } from 'react-router-dom';
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
  const isChatOrderPage = currentLocation.pathname.startsWith('/communities/chatorder/:id');

  // 조건에 맞게 BottomBar를 렌더링하지 않도록 설정
  const showBottomBar = !isCommunitiesPage && !isOrderPage && !isStandbyPage && !isCompletePage && isChatOrderPage;
  const showTopBar = !isCommunitiesPage && isChatOrderPage;

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
