import React from 'react';
import '../../assets/styles/components/ListUsers.scss';

const ListUsers = ({users}) => {
    return (
        <div className="container">
            <table className="table table-bordered table-hover">
                <thead className="bg-info">
                    <tr>
                        <th className="text-center h6">#</th>
                        <th className="text-center h6">Nombres y apellidos</th>
                        <th className="text-center h6">Correo</th>
                        <th className="text-center h6">rol</th>
                        <th className="text-center h6">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (                    
                        <tr key={i} className="table-sm">
                            <td className="text-center align-middle">{i + 1}</td>
                            <td className="text-center align-middle">{`${user.nombre} ${user.apellido}`}</td>
                            <td className="text-center align-middle">{user.email}</td>
                            <td className="text-center align-middle">{user.rol === "1" ? 'Administrador' : 'Mesero'}</td>
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

export default ListUsers;