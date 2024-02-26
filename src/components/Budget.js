import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, remaining } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value) {
            if(event.target.value > 20000) {
                alert("The value cannot exceed £20,000");
                return;
            }
            if(event.target.value < budget-remaining) {
                alert("You cannot reduce the budget lower than current spending"+event.target.value);
                return;
            }
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
{
// <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
}
<input type="number" value={newBudget} onInput={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
