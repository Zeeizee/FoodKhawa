import React from 'react'
import classes from './MealsBox.module.css'


export default function MealsBox(props) {
    return (
        <section className={classes.mealsBox}>
           <div className={classes.foodItems}>
           <h3>{props.items.name}</h3>
            <p>{props.items.description}</p>
            <span className={classes.price}>${props.items.price}</span>
           </div>
           <div className={classes['add-cart']}>
               <div><span >Amount</span> <span><input  type="text"/></span></div>
               <div><button> + Add </button></div>
           </div>


        </section>
    )
}
