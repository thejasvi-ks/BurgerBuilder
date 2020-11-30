import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])] // [,]
        .map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        }) 
    }) //props.ingredients is an object
    .reduce((arr,el) => {
        return arr.concat(el);
    }, [])   // flattening the array of arrays.

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding the ingredients.</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {/* <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/> */}
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;