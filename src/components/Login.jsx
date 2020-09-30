import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import {auth} from '../firebase/firebase';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
    const {closeLogin} = props;
    const initialStateValues = {
        email: '',
        password: ''
    }

    const [values, setValues] = useState(initialStateValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(values.email, values.password)
        .then(response => {
            if(response) {
                console.log(response)
                props.history.push('/dashboard');
            }
        })
    }

    const handleCloseLogin = () => closeLogin();

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    return (
        <div className="card mb-3">
            <div className="align-items-center bg-dark card-header d-flex justify-content-between text-white">
                <h3>Iniciar sesion</h3>
                <button className="btn btn-danger" onClick={handleCloseLogin}>
                    <i className="material-icons">close</i>
                </button>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="control-label text-white">Correo</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="material-icons">person</i>
                                </span>
                            </div>
                            <input 
                                type="text" 
                                className="form-control"
                                name="email"
                                placeholder="Correo electronico"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label text-white">Contraseña</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="material-icons">lock</i>
                                </span>
                            </div>
                            <input 
                                type="password" 
                                className="form-control"
                                name="password"
                                placeholder="Contraseña"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary d-block m-auto" type="submit">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default withRouter(Login);