import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    //constructor (props){
    //    super(props);
    //    this.state = {
    //    }
    // }
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        } 
    }   
    render (){
        return (
            <Auxillary>
                <Burger ingredients = {this.state.ingredients}/>
                <div>Build Control</div>
            </Auxillary>
        );
    }
}

export default BurgerBuilder;