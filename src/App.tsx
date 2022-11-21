import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';


import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { theme } from './shared/utils/theme';
import HomePage from './pages/Home.page';
import SigninPage from './pages/Signin.page';
import PrivateRoute from './features/auth/components/PrivateRoute';
import { ThemeProvider } from '@mui/material';

import { store } from './store';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router>
          <Routes>
            <Route path='/' element={<PrivateRoute page={<HomePage />} />} />
            <Route path='/signin' element={<SigninPage />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
        </LocalizationProvider>
    </ThemeProvider>

   

  );
}

type CypressWindow = Window & typeof globalThis & { Cypress: any; store: any };

const thisWindow = window as CypressWindow;

if (thisWindow.Cypress) {
  console.log('CYPRESS WINDOW');

  thisWindow.store = store;
}

export default App;
