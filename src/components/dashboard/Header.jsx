import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <Link to="/dashboard" className="navbar-brand">Restaurante</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/dashboard" className="nav-link">
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard/users" className="nav-link">
                            Usuarios
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard/menu" className="nav-link">
                            Menu
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Cerrar sesión
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header