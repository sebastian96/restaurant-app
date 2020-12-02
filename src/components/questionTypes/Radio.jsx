import React from 'react';
import {changeClass} from '../../utils/domFunctions';

const Radio = ({questionContext, onCheck}) => {
    const {index, question} = questionContext;
    
    const radioSelect = (e) => {
        changeClass('js-radio');
        onCheck({
            isButtonDisplayed: false, 
            answer: {
                question_id: question.id,
                answer: e.target.value
            }
        });
    };

    return(
        <>
            {question.options.map((option, i) => (
                <div className="custom-control custom-radio w-75" key={i}>
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