import React from 'react';
import {changeClass} from '../../utils/domFunctions';

const Checkbox = ({questionContext, onCheck}) => {
    const {index, question} = questionContext;

    const checkboxSelect = (e) => {
        changeClass('js-checkbox');
        onCheck(true);
    };

    return (
        <>
            {question.options.map((option, i) => (
                <div className="custom-control custom-radio w-25" key={i}>
                    <input 
                        className="custom-control-input js-checkbox"
                        type="checkbox" 
                        id={`checkbox_${i + 1}-${index + 1}`} 
                        name={`checkbox_${i + 1}`} 
                        value={option}
                        onClick={checkboxSelect}
                    />
                    <label className="btn btn-outline-primary text-white w-100" htmlFor={`checkbox_${i + 1}-${index + 1}`}>{option}</label>
                </div>
            ))}
        </>
    );
};

export default Checkbox;