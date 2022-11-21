import {  useNavigate } from 'react-router-dom';

import { AppBar, Box, Button, Toolbar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import { logout, selectedUser } from '../authSlice';

const HeaderComponent = () => {
  const { user } = useAppSelector(selectedUser);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/signin')
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{ backgroundColor: '#131921', color: 'white', padding: '4px' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img
            onClick={() => navigate('/')}
            style={{
              width: '150px',
              height: '50px',
              paddingTop: '10px',
              cursor: 'pointer',
            }}
            src='/freshcells-logo.png'
            alt='Freshcells logo'
          />
          <div style={{ display: 'flex' }}>
            <div>
              <div>Hello, {user?.firstName} {user?.lastName}</div>
              <Button 
                onClick={logoutHandler}
                sx={{ padding: 0, marginRight: '16px', fontWeight: 'bold' }}
                color='primary'
                variant="contained"
              >
                Sign out
                <LogoutIcon/>
              </Button>
            </div>
            
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
