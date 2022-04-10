import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {AiOutlineShoppingCart} from 'react-icons/ai';

import './BasicMenu.css';

export default function BasicMenu({shopState, counterState}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AiOutlineShoppingCart />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          shopState.map((item, index) => {
            return (
              <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
            )
          })
        }
        <h3>{counterState} items in total</h3>
      </Menu>
    </div>
  );
}