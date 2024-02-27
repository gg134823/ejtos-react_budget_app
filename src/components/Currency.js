import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const [newCurrency, setNewCurrency] = useState(currency);
    
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return (

        <div className='input-group alert alert-success p-2'>
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect03">Currency: </label>
            </div>
        

            <select className="custom-select"  value={newCurrency} id="inputGroupSelect03" onChange={handleCurrencyChange}>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        
        </div>
    );
};
export default Currency;
