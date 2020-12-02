import React from 'react';
import {changeClass} from '../../utils/domFunctions';

let answerUserSelect = [];

const Checkbox = ({questionContext, onCheck}) => {
    const {index, question} = questionContext;
    
    const checkboxSelect = (e) => {
        const value = e.target.value
        const found = answerUserSelect.find(ans => ans === value);
        
        changeClass('js-checkbox');

        if(found) {
            const index = answerUserSelect.indexOf(value);
            if (index > -1) {
                answerUserSelect.splice(index, 1);
            }
        } else {
            answerUserSelect.push(value);
        }
        
        onCheck({
            isButtonDisplayed: false, 
            answer: {
                question_id: question.id,
                answer: answerUserSelect
            }
        });
    };

    return (
        <>
            {question.options.map((option, i) => (
                <div className="custom-control custom-radio w-75" key={i}>
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