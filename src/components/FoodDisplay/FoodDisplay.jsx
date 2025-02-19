import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({category}) => {
    
    const { food_list } = useContext(StoreContext)


    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((value, index)=>{
                    return  <FoodItem key={index} id={value._id} name={value.name} image={value.image} price={value.price} description={value.description} category={value.category} />
                })}
            </div>
        </div>
    )
}

export default FoodDisplay