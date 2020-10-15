import React from 'react';
import '../../assets/styles/components/Textarea.scss';

const Textarea = ({onCheck}) => {
    // onCheck(true);
    return (
        <div className="form-group w-75">
            <textarea className="form-control textarea" id="exampleTextarea" placeholder="Escribe aqui..."></textarea>
        </div>
    )
}

export default Textarea;