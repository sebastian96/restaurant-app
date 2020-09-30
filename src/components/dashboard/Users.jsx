import React, {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import {db} from '../../firebase/firebase';

import ListUsers from './ListUsers';

const Users = () => {

    const [userList, setUsers] = useState([]);

    const getUsers = () => {
        db.collection('users').onSnapshot(res => {
            const docs = [];
            res.forEach(user => {
                docs.push({...user.data(), id: user.id});
            })
            setUsers(docs);
        });
    }

    useEffect(() => {
        getUsers();
    }, []);
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex col-12 d-flex justify-content-between pt-4">
                        <h2>Lista de estudiantes</h2>
                        <Link to="/dashboard/users/register-user" className="align-items-center btn btn-primary d-flex">
                            Registrar usuario
                        </Link>
                    </div>
                </div>
                <div className="row mt-5">
                    <ListUsers users={userList}/>
                </div>
            </div>
        </>
    );
};

export default Users;