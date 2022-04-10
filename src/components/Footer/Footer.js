import React from 'react'
import Button from '@mui/material/Button'
import {BiMessageDetail} from 'react-icons/bi'
import {BsHeadset} from 'react-icons/bs'
import './Footer.css'

import vtex from '../../statics/vtex.png'
import logo_alt from '../../statics/logo_alt.png'

const Footer = () => {
  return (
    <footer>
        <div className='footer__localization'>
            <h1>Localizacao</h1>
            <h4>Avenida Andrómeda, 2000, Bloco 6 e 8</h4>
            <h4>Alphavile SP</h4>  
            <h4>brasil@corebiz.ag</h4> 
            <h4>+55 11 3090 10390</h4>
        </div>
        <div className='footer__buttons'>
            <Button variant="contained"><BiMessageDetail /><h4> Contactenos</h4></Button>
            <Button variant="contained"><BsHeadset />Hable con nosotros</Button>
        </div>
        <div className='footer__logos'>
            <div className='footer__logos-img'>
                <h3>Created By</h3>
                <img src={logo_alt} alt='logo'/>
            </div>
            <div className='footer__logos-img'>
                <h3>Powered By</h3>
                <img src={vtex} alt='vtex'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer