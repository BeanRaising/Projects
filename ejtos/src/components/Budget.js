import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Budget = (props) => {
    const { budget, budgetMax, dispatch, currency } = useContext(AppContext);
    const [inputValue, setInputValue] = useState(budget);

    let typingTimeout = null;

    useEffect(() => {
        setInputValue(budget); // Update input value when budget changes
    }, [budget]);

    const handleInputChange = (event) => {
        const newInput = parseInt(event.target.value, 10);
        setInputValue(newInput);
    };

    const handleInputDone = () => {
        clearTimeout(typingTimeout);

        typingTimeout = setTimeout(() => {
                dispatch({ type: "CHG_BUDGET", payload: inputValue });
                setInputValue(budget);
        }); 
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    type='number'
                    id='budget'
                    value={inputValue}
                    style={{ marginLeft: '0rem', Size: '10px' }}
                    max={budgetMax}
                    step="10"
                    onChange={handleInputChange}
                    onKeyUp={handleInputDone}
                />
            </span>
        </div>
    );
};

export default Budget;
