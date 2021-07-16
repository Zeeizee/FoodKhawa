import React from 'react'
import classes from './AvailableMeals.module.css'
import MealsBox from './MealsBox'

const Dummy_data=[
    {
        id:"1",
        name:"Biryani",
        description:"Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat",
        price:300
    },
    {
        id:"2",
        name:"Karahi",
        description:"Karahi is named after the pan in which it was originally cooked – a heavy, often cast-iron pan that's similar to a wok",
        price:800
    },
    {
        id:"3",
        name:"Cheese Pratha",
        description:"Cheese paratha is a delicious whole wheat flatbread stuffed with a spiced cheese stuffing. These cheese flatbreads make for a wholesome breakfast or brunch",
        price:500
    }, 
    {
        id:"4",
        name:"Tikka Kabab",
        description:"Tikka Kabab Recipe - Read Quick & Easy to Cook Tikka Kabab Recipe and make your favorite recipe at home available",
        price:100
    },
    {
        id:"5",
        name:"French Toast",
        description:"French toast is a dish made of sliced bread soaked in beaten eggs and typically milk, then pan fried",
        price:100
    }
]
export default function AvailableMeals() {
    return (
        <div className={classes.meals}>
            <ul >
               {Dummy_data.map(item=>{
                  return(
                    <li key={item.id}>
                        <MealsBox items={item}/>

                    </li>
                  )
               })}
            </ul>
            
        </div>
    )
}
