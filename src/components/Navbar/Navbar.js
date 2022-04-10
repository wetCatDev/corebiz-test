import React from 'react'
import './navbar.css'
import {BsPerson} from 'react-icons/bs'
import TextField from '@mui/material/TextField';
import logo from '../../statics/logo.png'
import BasicMenu from './BasicMenu';

const Navbar = ({shopState, counterState}) => {
  return (
    <navbar>
      <div className="navbar__item">
        <img className='logo' src={logo} alt="logo" />
      </div>
      <div className="navbar__item">
        <div className='search'>
        <TextField fullWidth id="standard-basic" 
        label={
          <>
            O que esta procurando
          </>}
        variant="standard"> </TextField>
        </div>
      </div>
      <div className='navbar__item'>
          <div className='navbar__account'>
            <BsPerson />
            <a href='#'>Minha Conta</a>
          </div>
      </div>
      <div className='navbar__item'>
          <div className='cart-name'>
              <BasicMenu shopState={shopState} counterState={counterState}/>
          </div>
      </div>
    </navbar>
  )
}

export default Navbar