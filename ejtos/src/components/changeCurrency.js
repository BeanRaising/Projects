import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const changeCurrency = () => {
    const { currency } = useContext(AppContext);
    
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;