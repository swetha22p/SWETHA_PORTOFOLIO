import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link as ScrollLink } from 'react-scroll';
import Button from '@mui/material/Button';
import logo from '../img/wd.png';

const drawerWidth = 240;

const navItems = [
  { text: 'Home', path: 'home' },
  { text: 'About', path: 'about' },
  { text: 'Resume', href: "https://drive.google.com/file/d/1L2--hbC4Q-TZ7AcqMnp-vfopMe_PWj-H/view?usp=sharing" }, // External link
  { text: 'Projects', path: 'project'},
  { text: 'Contact', path: 'contact' },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            {item.path ? (
              <ListItemButton>
                <ScrollLink
                  to={item.path}
                  smooth={true}
                  duration={500}
                  style={{ width: '100%', textAlign: 'center', color: 'white', cursor: 'pointer', textDecoration: 'none' }}
                >
                  <ListItemText primary={item.text} />
                </ScrollLink>
              </ListItemButton>
            ) : (
              <ListItemButton component="a" href={item.href} target="_blank" rel="noopener noreferrer" sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.text} sx={{ color: 'white' }} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' } }} className='text'>
              <b> SWETHA POPPOPPU</b>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              item.path ? (
                <Button key={item.text} sx={{ color: '#fff' }}>
                  <ScrollLink
                    to={item.path}
                    smooth={true}
                    duration={500}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {item.text}
                  </ScrollLink>
                </Button>
              ) : (
                <Button key={item.text} component="a" href={item.href} target="_blank" rel="noopener noreferrer" sx={{ color: '#fff' }}>
                  {item.text}
                </Button>
              )
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'black', color: 'white' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
