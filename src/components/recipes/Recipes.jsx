import React, { Component, Fragment } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Recipe from './Recipe';

class Recipes extends Component {
    render() {
        return (
            <div>
            <Consumer>
                {value => {
                const { recipes, heading } = value;   
                if(recipes === undefined || recipes.lenght === 0){
                  return <Spinner/>  
                }else{
                return(
                <Fragment>
                <h3 className='text-center mb-4'>{heading}</h3>     
                <div className='row'>
                {
                recipes.map(item =>(
                <Recipe key={item.id} recipe={item}/>
                  )
                 )
                }    
                </div>
                </Fragment>   
                )
                }

                }}
            </Consumer>
            </div>
        )
    }
}
export default  Recipes;