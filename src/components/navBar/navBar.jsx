import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import { ShoppingCart, Person } from '@mui/icons-material';
import { useSelector, useDispatch } from "react-redux";
import { selectCart, setSearch } from "../../features/userSlice";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const cart = useSelector(selectCart)
  const [profileMenuAnchor, setProfileMenuAnchor] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <Typography component={Link} to="/products" variant="h6" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Star Mobiles
        </Typography>

        <IconButton color="inherit" component={Link} to="/checkout">
          <Badge badgeContent={cart.length > 0 ? cart.length : 0} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>

        <IconButton color="inherit" onClick={handleProfileMenuOpen}>
          <Avatar>
            <Person />
          </Avatar>
        </IconButton>
        <Menu anchorEl={profileMenuAnchor} open={Boolean(profileMenuAnchor)} onClose={handleProfileMenuClose}>
          <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
