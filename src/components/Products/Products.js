import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button'
import './Products.css'

const Products = ({addFunction}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const URL = 'https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products'
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            setItems(data)
        })
    }, [])

  return (
    <div className='products__container'>
        <div className='products__container-title'>
            <h1>Mas vendidos</h1>
        </div>
        <div className='products__container-items'>
          {
            items.map(item => (
              <div className='products__item' key={item.id}>
                <img src='https://bigtex.com/wp-content/uploads/2018/05/placeholder-640x480.png' alt='producto' />
                <p>{item.product}</p>
                <p>${item.price}</p>
                <p>SKU: {item.sku}</p>
                <p>Color: {item.color}</p>
                <Button variant="contained" value={item.product} onClick={addFunction}>Añadir al carro</Button>
              </div>
            ))
          }
          
        </div>
    </div>
  )
}

export default Products