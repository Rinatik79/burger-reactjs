import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredienSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
    });
    
    return (
        <Auxillary>
            <h3>Your Order</h3>
            <p>A delitious burger with following ingredients:</p>
            <ul>
                {ingredienSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxillary>
    );
};

export default orderSummary;