import React from 'react';
import { Route } from 'react-router-dom';
import Header from './dashboard/Header';
import Statistics from './dashboard/statistics';
import Users from './dashboard/Users';
import RegisterUser from './dashboard/RegisterUser';
import Survey from './dashboard/Survey';

const container = () => {
    return (
        <>
            <section className="bg-dark p-4 text-white">
                <div className="container">
                    <h3 className="w-100 mb-4">Pedidos</h3>
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="card text-white mb-3">
                                <div className="card-header">
                                    <h4>Mesa 1</h4>
                                </div>
                                <div className="bg-white card-body text-dark">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem, ipsum.
                                            <span className="badge badge-primary badge-pill">2</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem, ipsum dolor.
                                            <span className="badge badge-primary badge-pill">4</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem ipsum dolor sit.
                                            <span className="badge badge-primary badge-pill">3</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem, ipsum.
                                            <span className="badge badge-primary badge-pill">8</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem, ipsum dolor.
                                            <span className="badge badge-primary badge-pill">6</span>
                                        </li>
                                        <li className="align-items-center bg-danger d-flex justify-content-between list-group-item text-white">
                                            Total
                                            <span className="badge badge-light">$70.000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="card text-white mb-3">
                                <div className="card-header">
                                    <h4>Mesa 2</h4>
                                </div>
                                <div className="bg-white card-body text-dark">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem, ipsum.
                                            <span className="badge badge-primary badge-pill">2</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem, ipsum dolor.
                                            <span className="badge badge-primary badge-pill">4</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem ipsum dolor sit.
                                            <span className="badge badge-primary badge-pill">3</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem, ipsum.
                                            <span className="badge badge-primary badge-pill">8</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem, ipsum dolor.
                                            <span className="badge badge-primary badge-pill">6</span>
                                        </li>
                                        <li className="align-items-center bg-danger d-flex justify-content-between list-group-item text-white">
                                            Total
                                            <span className="badge badge-light">$50.000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="card text-white mb-3">
                                <div className="card-header">
                                    <h4>Mesa 3</h4>
                                </div>
                                <div className="bg-white card-body text-dark">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem, ipsum.
                                            <span className="badge badge-primary badge-pill">2</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem, ipsum dolor.
                                            <span className="badge badge-primary badge-pill">4</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem ipsum dolor sit.
                                            <span className="badge badge-primary badge-pill">3</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem, ipsum.
                                            <span className="badge badge-primary badge-pill">8</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Lorem, ipsum dolor.
                                            <span className="badge badge-primary badge-pill">6</span>
                                        </li>
                                        <li className="align-items-center bg-danger d-flex justify-content-between list-group-item text-white">
                                            Total
                                            <span className="badge badge-light">$100.000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-4">
                <Statistics />
            </section>
        </>
    )
}

const Dashboard = () => {
    return (
        <>
            <Header />
            <Route exact path="/dashboard" component={container} />
            <Route exact path="/dashboard/users" component={Users} />
            <Route exact path="/dashboard/users/register-user" component={RegisterUser} />
            <Route exact path="/dashboard/Survey" component={Survey} />
        </>
    )
};

export default Dashboard;