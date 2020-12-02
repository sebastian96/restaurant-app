import React, {useState} from 'react';

const Range = ({questionContext, onCheck}) => {
    const {question} = questionContext;
    const [value, valueRange] = useState('3');
    const [emoji, emojiText] = useState('🙂 3 🙂');

    const rangeSelect = (e) => {
        valueRange(e.target.value);
        onCheck({
            isButtonDisplayed: false,
            answer: {
                question_id: question.id,
                answer: value
            }
        });
        switch(e.target.value) {
            case '1':
                return emojiText(`😭 ${e.target.value} 😭`);
            case '2':
                return emojiText(`😕 ${e.target.value} 😕`);
            case '3':
                return emojiText(`🙂 ${e.target.value} 🙂`);
            case '4':
                return emojiText(`😁 ${e.target.value} 😁`);
            case '5':
                return emojiText(`🤩 ${e.target.value} 🤩`);
        };
    }
    return (
        <div className="form-group w-75 range">
            <p className="h1 text-white text-center js-emoji">{emoji}</p>
            <input 
                type="range" 
                className="custom-range" 
                id="customRange1" 
                max="5"
                min="1" 
                step="1"
                value={value}
                onChange={rangeSelect}
            />
        </div>
    );
}

export default Range;