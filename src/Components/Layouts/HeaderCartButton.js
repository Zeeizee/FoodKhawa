import React from 'react'
import cartIcon from '../../assets/carts.svg'
import classes from './HeaderCartButton.module.css';


export default function HeaderCartButton() {
    return (
       <button className={classes.button}>
           <span className={classes.icon}>
              <img src={cartIcon} />
           </span>
           <span className={classes['cart-text']}>Your Cart</span>
           <span className={classes.badge}>3</span>
       </button>
    )
}
