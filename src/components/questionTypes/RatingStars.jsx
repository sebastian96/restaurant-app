import React from 'react';
import '../../assets/styles/components/RatingStars.scss';

const RatingStars = ({questionContext, onCheck}) => {
    const {question} = questionContext;

    const selectStar = (e) => {
        onCheck({
            isButtonDisplayed: false,
            answer: {
                question_id: question.id,
                answer: e.target.value
            }
        })
    }
    
    return (
        <div className="stars">
            <input 
                type="radio" 
                name="star"
                className="star-1"
                id="star-1"
                value="1"
                onClick={selectStar}
            />
            <label className="star-1" htmlFor="star-1">1</label>
            <input 
                type="radio" 
                name="star"
                className="star-2"
                id="star-2" 
                value="2"
                onClick={selectStar}
            />
            <label className="star-2" htmlFor="star-2">2</label>
            <input 
                type="radio" 
                name="star"
                className="star-3"
                id="star-3" 
                value="3"
                onClick={selectStar}
            />
            <label className="star-3" htmlFor="star-3">3</label>
            <input 
                type="radio" 
                name="star"
                className="star-4"
                id="star-4" 
                value="4"
                onClick={selectStar}
            />
            <label className="star-4" htmlFor="star-4">4</label>
            <input 
                type="radio" 
                name="star"
                className="star-5"
                id="star-5" 
                value="5"
                onClick={selectStar}
            />
            <label className="star-5" htmlFor="star-5">5</label>
            <span></span>
        </div>
    )
}

export default RatingStars;