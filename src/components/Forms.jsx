import React, {useState} from 'react';
import Radio from './questionTypes/Radio';
import Checkbox from './questionTypes/Checkbox';
import Range from './questionTypes/Range';
import Textarea from './questionTypes/Textarea';
import RatingStars from './questionTypes/RatingStars';
import '../assets/styles/components/Forms.scss';

const Forms = ({questions}) => { 
    const [buttonDisplay, setButtonDisplay] = useState(false);
    let answers = [];
    let answer;
    
    questions.sort((posOne, posTwo) => {
        if (posOne.order > posTwo.order) {
            return 1;
        }
        if (posOne.order < posTwo.order) {
            return -1;
        }
    });
    
    const updateState = (isButtonDisplayed) => setButtonDisplay(isButtonDisplayed);
    
    const cualquierNombre = (componentAnswer) => {
        answer = componentAnswer;
        console.log("cualquierNombre -> componentAnswer", answer)
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
            setButtonDisplay(false);
        }
      // answers = [...answers, answer];
        console.log(answer);
        console.log("cualquierNombre -> answer", answers)
    }
    
    const printElement = (question) => {
        const {type} = question.question;
        
        switch(type) {
            case 1:
                return <Radio questionContext={question} onCheck={updateState} info={cualquierNombre}/>;
            case 2:
                return <Checkbox questionContext={question} onCheck={updateState}/>
            case 3:
                return <Range onCheck={updateState}/>
            case 4:
                return <Textarea onCheck={updateState}/>
            case 5: 
                return <RatingStars onCheck={updateState}/>
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
                        {buttonDisplay &&
                            <button className="btn btn-success d-block m-auto" onClick={nextOrSend.bind(this, index + 1)}>
                                {index + 1 === questions.length ? 'Enviar' : 'Siguiente'}
                            </button>
                        }
                    </div>
                </div>
            ))}
        </>
    )
}

export default Forms;