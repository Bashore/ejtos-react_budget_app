import React, { useContext } from 'react';

import {AppContext} from '../context/AppContext';
import { FcPlus} from "react-icons/fc";
import { FaCircleMinus } from "react-icons/fa6";
import { TiDelete } from 'react-icons/ti';
const ExpenseItem = (props) => {
  const {dispatch,currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10
    };
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10
    };
    dispatch({
      type: 'RED_EXPENSE',
      payload: expense
    });
  };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FcPlus size='1.5em' onClick={event=> increaseAllocation(props.name)}></FcPlus></td>
        <td><FaCircleMinus  size='1.5em' style={{color:'red'}} onClick={event=> decreaseAllocation(props.name)}></FaCircleMinus></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
