import React from 'react';

import '../assets/styles/components/Forms.scss';

const Forms = ({questions}) => {

    const radioSelect = (e) => {
        console.log("radioSelect -> e", e.target.value)
        const radios = document.querySelectorAll('.js-radio');
        radios.forEach(input => {
            const label = input.nextSibling;
            if(input.checked) {
                label.classList.add('btn-primary');
                label.classList.remove('btn-outline-primary');
            }else {
                label.classList.remove('btn-primary');
                label.classList.add('btn-outline-primary');
            }
        })
    }

    const nextOrSend = (indexQuestion) => {
        if(indexQuestion === questions.length) {
            console.log('enviarrrr');
        } else {
            const cardQuestion = document.querySelectorAll('.js-card');
            const nextCardQuestion = cardQuestion[indexQuestion];
            
            if(nextCardQuestion) {
                cardQuestion[indexQuestion - 1].classList.remove('is-active');
                cardQuestion[indexQuestion - 1].classList.add('is-disabled');
                nextCardQuestion.classList.add('is-active')
                nextCardQuestion.classList.remove('is-disabled')
            }
        }
        
    }

    return(
        <>
            {questions.map((question, index) => ( 
                <div className={`card js-card ${index === 0 ? 'is-active' : 'is-disabled'}`} key={index}>
                    <div className="card-header bg-dark">
                        <h4 className="text-white text-center">{question.textQuestion}</h4>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        {question.options.map((option, i) => (
                            <div className="custom-control custom-radio w-25" key={i}>
                                <input 
                                    type="radio" 
                                    id={`radio_${i + 1}-${index + 1}`} 
                                    name="radio" 
                                    className="custom-control-input js-radio"
                                    value={option}
                                    onClick={radioSelect}
                                />
                                <label className="btn btn-outline-primary text-white w-100" htmlFor={`radio_${i + 1}-${index + 1}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                    <div className="mb-4">
                        <button className="btn btn-success d-block m-auto" onClick={() => nextOrSend(index + 1)}>
                            {index + 1 === questions.length ? 'Enviar' : 'Siguiente'}
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Forms;