import React from 'react';
import '../../assets/styles/components/Textarea.scss';

const Textarea = ({questionContext, onCheck}) => {
    const {question} = questionContext;

    const textareaText = (e) => {
        let value = e.target.value;

        if(value.length === 0 || value === '') {
            value = 'Sin respuesta';
        }
        onCheck({
            isButtonDisplayed: false,
            answer: {
                question_id: question.id,
                answer: value
            }
        });

    }

    return (
        <div className="form-group w-100">
            <textarea 
                className="form-control textarea" 
                id="exampleTextarea" 
                placeholder="Escribe aqui..."
                onChange={textareaText}
            >
            </textarea>
        </div>
    )
}

export default Textarea;