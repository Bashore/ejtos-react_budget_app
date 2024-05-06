import React, { useContext,useState } from 'react';

import {AppContext} from '../context/AppContext';
const Currency = (props) => {
  const { dispatch,currency } = useContext(AppContext);
  const [currText,setCurrText] = useState('');
  const setCurrency = (newCurrency) => {
    switch (newCurrency) {
      case '£': setCurrText(' £ Pound');
        break
      case '$': setCurrText(' $ Dollar');
        break
      case '€': setCurrText(' € Euro');
        break
      case '₹': setCurrText(' ₹ Ruppee');
        break
    };
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: newCurrency,
                });
        };

  return (
    <div  className='alert alert-info'>
    <label className="input-group-text" htmlFor="inputGroupCurrency">Currency( {currText} )</label>
    <select id='inputGroupCurrency' onChange={(event) => setCurrency(event.target.value)}>
      <option defaultValue value='£'>£ Pound</option>
      <option value='$'>$ Dollar</option>
      <option value='€'>€ Euro</option>
      <option value='₹'>₹ Ruppee</option>
    </select>
    </div>
  );
};

export default Currency;
