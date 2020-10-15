import React, {useState} from 'react';

const Range = ({onCheck}) => {
    const [value, valueRange] = useState('3');
    const [emoji, emojiText] = useState('🙂 3 🙂');

    const rangeSelect = (e) => {
        valueRange(e.target.value);
        onCheck(true);
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
        <div className="form-group w-50">
            <div className="d-flex justify-content-center">
                <p className="h1 text-white js-emoji">{emoji}</p>
            </div>
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