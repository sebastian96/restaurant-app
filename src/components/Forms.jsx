import React, {useState} from 'react';
import { connect } from 'react-redux';
import { registerAnswer } from '../actions';
import {db} from '../firebase/firebase';
import Radio from './questionTypes/Radio';
import Checkbox from './questionTypes/Checkbox';
import Range from './questionTypes/Range';
import Textarea from './questionTypes/Textarea';
import RatingStars from './questionTypes/RatingStars';
import {defaultAlert} from '../utils/alerts';
import '../assets/styles/components/Forms.scss';

const Forms = ({questions, userAnswer, registerAnswer}) => {
    const [stateQuestion, setStateQuestion] = useState({isButtonDisplayed: true, answer: {}});
    
    questions.sort((posOne, posTwo) => {
        if (posOne.order > posTwo.order) {
            return 1;
        }
        if (posOne.order < posTwo.order) {
            return -1;
        }
    });
    
    const updateState = (question) => setStateQuestion(question);
    
    const nextOrSend = async (indexQuestion) => {
        if(indexQuestion === questions.length) {
            registerAnswer(stateQuestion.answer);
            await db.collection('answers').doc().set({...userAnswer});
            defaultAlert({
                title: 'Enviado correctamente', 
                message: 'Gracias por responder la encuesta', 
                type: 'success'
            });
        } else {
            const cardQuestion = document.querySelectorAll('.js-card');
            const nextCardQuestion = cardQuestion[indexQuestion];
            
            if(nextCardQuestion) {
                cardQuestion[indexQuestion - 1].classList.remove('is-active');
                cardQuestion[indexQuestion - 1].classList.add('is-disabled');
                nextCardQuestion.classList.add('is-active')
                nextCardQuestion.classList.remove('is-disabled')
            }
            registerAnswer(stateQuestion.answer)
            setStateQuestion({isButtonDisplayed: true, answer: {}});
        }
    }
    
    const printElement = (question) => {
        const {type} = question.question;
               
        switch(type) {
            case 1:
                return <Radio questionContext={question} onCheck={updateState} />;
            case 2:
                return <Checkbox questionContext={question} onCheck={updateState}/>;
            case 3:
                return <Range questionContext={question} onCheck={updateState}/>;
            case 4:
                return <Textarea questionContext={question} onCheck={updateState}/>;
            case 5: 
                return <RatingStars questionContext={question} onCheck={updateState}/>;
        };
    }

    return(
        <>
            {questions.map((question, index) => (
                <div className={`card js-card ${index === 0 ? 'is-active' : 'is-disabled'}`} key={index}>
                    <div className="card-header bg-dark">
                        <h4 className="text-white text-center">{question.textQuestion}</h4>
                    </div>
                    <div className="card-body d-flex flex-wrap justify-content-center">
                        {printElement({question, index})}
                    </div>
                    <div className="mb-4">
                        <button 
                            className="btn d-block btn-success m-auto"
                            onClick={nextOrSend.bind(this, index + 1)}
                            disabled={stateQuestion.isButtonDisplayed}
                        >
                            {index + 1 === questions.length ? 'Enviar' : 'Siguiente'}
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

const mapStateToProps = state => {
    return {
        userAnswer: state.userAnswer
    }
}

const mapDispatchToProps = {
    registerAnswer
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);