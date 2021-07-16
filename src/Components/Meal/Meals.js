import React from 'react'
import MealsSummery from './MealsSummery'
import AvailableMeals from './AvailableMeals'

export default function Meals() {
    return (
        <React.Fragment>
            <MealsSummery/>
            <AvailableMeals/>
        </React.Fragment>
    )
}
