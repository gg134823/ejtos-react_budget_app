import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const buttonStyle = {
        backgroundColor: "#04AA6D",
        border: "none",
        color: "white",
        padding: "0px 8px 0px 8px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "20px",
        borderRadius: "50%"
    }

    const buttonStyle2 = {
        backgroundColor: "red",
        border: "none",
        color: "white",
        padding: "0px 8px 0px 8px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "20px",
        borderRadius: "50%"
    }

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={buttonStyle} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={buttonStyle2} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
