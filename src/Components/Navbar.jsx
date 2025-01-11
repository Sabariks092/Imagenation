import React, { useContext } from 'react';
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from '../Context/AppContext';

export const Navbar = () => {
    const { user, logout, credit } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <>
            <nav
                className="navbar px-4 my-2 sticky-top navbar-expand-lg"
                style={{
                    height: "70px",
                    backgroundColor: "black",
                    borderBottom: "1px solid rgb(68,72,73)",
                    marginTop: 0,
                    paddingTop: 0,
                    top: 0, // Ensures sticky positioning works correctly
                    zIndex: 1030, // Keeps navbar on top
                }}
            >
                <div className="container-fluid">
                    {/* Logo Section */}
                    <p
                        className="ms-4 mt-2"
                        style={{
                            cursor: "pointer",
                            color: "white",
                            textShadow: "2px 2px 3px rgb(0,122,255)",
                            fontSize: "28pt",
                        }}
                        onClick={() => navigate('/')}
                    >
                        <strong>Imagenation</strong>
                    </p>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse ms-auto navbar-collapse" id="navbarSupportedContent">
                        {user ? (
                            <ul className="navbar-nav ms-auto d-flex column align-items-center gap-3 mt-3 mt-lg-0">
                                {/* User Info Section */}
                                <li className="nav-item d-flex align-items-center">
                                    <p className="mb-0 text-white">Hi, {user.name}</p> 
                                    <div className="ms-2">
                                        <img
                                            src={assets.profile_icon}
                                            style={{
                                                cursor: "pointer",
                                                width: "30px",
                                                height: "30px",
                                                objectFit: "cover",
                                            }}
                                            className="rounded-circle img-fluid"
                                            alt="Profile Icon"
                                        />
                                    </div>
                                </li>
                                |
                                {/* Credits Section */}
                                <li className="nav-item d-flex ">
                                    <button
                                        style={{ backgroundColor: "white" }}
                                        className="btn d-flex align-items-center gap-2 rounded-pill"
                                        onClick={() => navigate('/pricing')}
                                    >
                                        <img src={assets.credit_star} alt="Credits" />
                                        <span>Credits Left : {credit}</span>
                                    </button>
                                </li>
                                |
                                <li>
                                    <div>
                                        <button className="LoginBtn rounded-5" style={{border:"2px solid"}} onClick={logout}>
                                            Logout
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav ms-auto d-flex column align-items-center gap-3 mt-3 mt-lg-0">
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white active"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => navigate('/pricing')}
                                    >
                                        Pricing
                                    </a>
                                </li>
                                |
                                <li className="nav-item">
                                    <button
                                        className="LoginBtn w-100 btn-dark text-white rounded-pill py-2 px-4"
                                        onClick={() => navigate('/login')}
                                        type="button"
                                        style={{ border: "2px solid" }}
                                    >
                                        Login
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};
