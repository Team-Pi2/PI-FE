import { BrowserRouter, useLocation, useMatch } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';

function App() {

  const currentLocation = useLocation();
  const isCommunitiesPage = useMatch('/communities/:id');

  return (
    <div className="App">
      {!isCommunitiesPage && <BottomBar />}
      {!isCommunitiesPage && <TopBar />}
      <div className='app-routes' >
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
