import React, {useState}  from 'react';
import {auth, db} from '../../firebase/firebase';
import '../../assets/styles/components/RegisterUser.scss';

const ListUsers = props => {

    const initialStateValues = {
        name: '', 
        lastName: '', 
        email: '',
        rol: '',
        password_1: '',
        password_2: ''
    }

    const [values, setValues] = useState(initialStateValues);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await auth.createUserWithEmailAndPassword(values.email, values.password_1);

        if(response) {
            response.user.updateProfile({
                displayName: `${values.name} ${values.lastName}|${values.rol}`, 
            })

            await db.collection('users').doc().set({
                nombre: values.name,
                apellido: values.lastName,
                email: values.email,
                rol: values.rol
            });

            props.history.push('/dashboard/users');
        }
    }

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    return (
        <div className="container">
            <div className="row p-4">
                <div className="col-12 mb-3">
                    <h3>Lista de usuarios</h3>
                </div>
                <form className="col-8 m-auto d-flex flex-wrap justify-content-around register-User" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label className="control-label">Nombres</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="material-icons">face</i>
                                </span>
                            </div>
                            <input 
                                type="text" 
                                className="form-control"
                                name="name"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Apellidos</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="material-icons">face</i>
                                </span>
                            </div>
                            <input 
                                type="text" 
                                className="form-control"
                                name="lastName"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Correo</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="material-icons">email</i>
                                </span>
                            </div>
                            <input 
                                type="text" 
                                className="form-control"
                                name="email"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Seleccione un rol</label>
                        <select className="custom-select" name="rol" onChange={handleInputChange}>
                            <option value="1">Administrador</option>
                            <option value="2">Mesero</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Contraseña</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="material-icons">vpn_key</i>
                                </span>
                            </div>
                            <input 
                                type="password" 
                                className="form-control"
                                name="password_1"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Confirmar Contraseña</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="material-icons">vpn_key</i>
                                </span>
                            </div>
                            <input 
                                type="password" 
                                className="form-control"
                                name="password_2"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="d-block form-gorup w-50">
                        <button type="submit" className="btn btn-primary btn-block">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ListUsers;