import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { ShoeType } from './components/Types/ShoeType'
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GitHubIcon from '@material-ui/icons/GitHub';
import MoreIcon from '@material-ui/icons/MoreVert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import "./App.css"
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { ShoePage } from "./components/ShoePage";
import l6 from './images/l6.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);

export default function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const shoes = useSelector((state:ShoeType[]) => state);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])
 

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
          <Link to="/" style={{color:"black"}}> <HomeIcon /> </Link>
          </Badge>
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={shoes.filter(shoe => shoe.added).length} color="secondary">
          <Link to="/Cart" style={{color:"black"}}> <ShoppingCartIcon /> </Link>
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
          <a href="https://github.com/Muhammad-Tariq-0/Shopping-Basket/tree/master" style={{color:"black"}}> <GitHubIcon /></a>
          </Badge>
        </IconButton>
        <p>GitHub</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Router>
    <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor:"transparent"}}>
        <Toolbar>
            <img
        src={l6}
        width="100"
        height="70"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
          
         
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton  color="inherit">
              <Badge color="secondary">
              <Link to="/" style={{color:"white"}}> <HomeIcon /> </Link>
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={shoes.filter(shoe => shoe.added).length} color="secondary">
              <Link to="/Cart" style={{color:"white"}}> <ShoppingCartIcon /> </Link>
              </Badge>
            </IconButton>
            <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
            <a href="https://github.com/Muhammad-Tariq-0/Shopping-Basket/tree/master" rel="noreferrer" target="_blank" style={{color:"white"}}> <GitHubIcon /></a>
          </Badge>
        </IconButton>
      </MenuItem>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      </div>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Cart" element={<Cart/>}/>
         <Route path="/ShoePage" element={<ShoePage/>}/>
       </Routes>
     </Router>
    </div>
  );
}
