import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, remaining, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value) {
            if(event.target.value > 20000) {
                alert("The value cannot exceed £20,000");
                return;
            }
            if(event.target.value < budget-remaining) {
                alert("You cannot reduce the budget to £"+event.target.value+" (lower than current spending)");
                return;
            }
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            });
        }
    }
    return (
<div className='alert alert-secondary px-2'>
<span>Budget: {currency} </span>
{
// <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
}
<input className="custom-select" type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
