import React from 'react'
import headerImg from '../../assets/food.PNG';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
    return (
        <React.Fragment>

        <header className={classes.header}>
            <h1>Daily Khawa</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={headerImg} alt="meals" />
        </div>
            
        </React.Fragment>
    )
}
