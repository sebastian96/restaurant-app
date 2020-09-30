import React, {useEffect, useState} from 'react';
import {db} from '../firebase/firebase';
import Login from './Login';

import '../assets/styles/components/Home.scss';
import Forms from './Forms';

const Home = () => {
    const [showResults, setShowResults] = useState(false)
    const [questions, setQuestions] = useState([]);
    const getQuestions = () => {
        db.collection('questions').onSnapshot(res => {
            let questions = [];
            res.forEach(question => {
                questions.push(question.data())
            })
            setQuestions(questions);
        });
    }

    const handleLogin = () => {
        setShowResults(true);
    }

    const closeLogin = () => {
        setShowResults(false);
    }

    useEffect(() => {
        getQuestions();
    }, []);
    
    return (
        <div className="bg-image">
            <header className="row">
                <div className="col-12">
                    <a className="m-3 float-right btn btn-outline-light btn-lg" onClick={handleLogin}>Login</a>
                </div>
            </header>
            {!showResults ?
                <div className="row h-100">
                    <div className="col-6 m-auto">
                        <Forms questions={questions}/>
                    </div>
                </div>
                :
                <div className="row h-100">
                    <div className="col-md-5 col-sm-10 m-auto">
                        <Login closeLogin={closeLogin}/>
                    </div>
                </div>
            }
        </div>  
    );
};

export default Home;