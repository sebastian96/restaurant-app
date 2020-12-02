import React, {useEffect, useState} from 'react';
import '../../assets/styles/components/Survey.scss';
import {db} from '../../firebase/firebase';

const Survey = () => {
    const [questions, setQuestions] = useState([]) 
    const getQuestions = () => {
        db.collection('questions').onSnapshot(res => {
            let questions = [];
            res.forEach(question => {
                console.log(question.data());
                let ask = question.data();
                ask.id = question.id;
                questions.push(ask);
            })
            setQuestions(questions);
        });
    }
    useEffect(() => {
        getQuestions();
    }, []);
    return (
        <div className="container">
            <table className="table table-bordered table-hover">
                <thead className="bg-info">
                    <tr>
                        <th className="text-center h6">Orden</th>
                        <th className="text-center h6">Texto Encuesta</th>
                        <th className="text-center h6">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {questions.map((quest, i) => (                    
                        <tr key={i} className="table-sm">
                            <td className="text-center align-middle">{i + 1}</td>
                            
                            <td className="text-center align-middle">{quest.textQuestion}</td>
                            <td className="d-flex justify-content-around">
                                <button className="btn btn-info btn-sm">
                                    <i className="material-icons">settings</i>
                                </button>
                                <button className="btn btn-danger btn-sm">
                                    <i className="material-icons">delete</i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Survey;