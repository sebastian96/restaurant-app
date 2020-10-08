import React from 'react';
import Radio from './questionTypes/Radio';
import Checkbox from './questionTypes/Checkbox';
import '../assets/styles/components/Forms.scss';

const Forms = ({questions}) => {

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

    const printElement = (question) => {
        switch(question.question.type) {
            case 1:
                return <Radio question={question}/>;
            case 2:
                return <Checkbox question={question}/>
        };
    }

    return(
        <>
            {questions.map((question, index) => ( 
                <div className={`card js-card ${index === 0 ? 'is-active' : 'is-disabled'}`} key={index}>
                    <div className="card-header bg-dark">
                        <h4 className="text-white text-center">{question.textQuestion}</h4>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        {printElement({question, index})}
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