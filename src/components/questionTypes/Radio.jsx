import React from 'react';
import {changeClass} from '../../utils/domFunctions';

const Radio = question => {
    const index = question.question.index;
    const quest = question.question.question;

    const radioSelect = (e) => {
        changeClass('js-radio');
    };

    return(
        <>
            {quest.options.map((option, i) => (
                <div className="custom-control custom-radio w-25" key={i}>
                    <input 
                        className="custom-control-input js-radio"
                        type="radio" 
                        id={`radio_${i + 1}-${index + 1}`} 
                        name="radio" 
                        value={option}
                        onClick={radioSelect}
                    />
                    <label className="btn btn-outline-primary text-white w-100" htmlFor={`radio_${i + 1}-${index + 1}`}>{option}</label>
                </div>
            ))}
        </>
    )
};

export default Radio;