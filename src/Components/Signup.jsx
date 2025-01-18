import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../Context/AppContext';
import { toast } from 'react-toastify';

export const Signup = () => {
    const navigate = useNavigate();
    const { setToken, setUser, setShowLogin, backendUrl } = useContext(AppContext);

    const [loading,setLoading]=useState();

    const [regData, setRegData] = useState({ name: '', email: '', password: '' });
    const [isChecked, setIsChecked] = useState(false);

    const handleInput = (e) => {
        setRegData({ ...regData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!regData.name || !regData.email || !regData.password) {
            toast.error('All fields are required!');
            return;
        }
        if (!isChecked) {
            toast.error('You must accept the terms and conditions.');
            return;
        }

        try {
            const { data } = await axios.post(`${backendUrl}/api/user/register`, regData);
            if (data.success) {
                setToken(data.token);
                setUser(data.user);
                localStorage.setItem('token', data.token);
                setShowLogin(false);
                toast.success('Registration successful!');
                navigate('/generate-image');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Error registering user:", error.message);
            toast.error("Error registering user: " + (error.response?.data?.message || error.message));
        }
        setLoading(false);
    };

    return (
        <div className="container mt-5" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="card" style={{ width: "400px" }}>
                {!loading && <div className="card-body" style={{ boxShadow: "2px 2px 8px" }}>
                    <div className="mb-3 text-center">
                        <h1 className='fw-bold'>Welcome !</h1>
                        <p>It takes only few minutes feature your <span>Ideas :)</span></p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-">
                            <label className="form-label">First Name</label>
                            <input type="text" name="name" onChange={handleInput} className="form-control" />
                        </div>
                        <div className="mb-">
                            <label className="form-label">Email address</label>
                            <input type="email" name="email" onChange={handleInput} className="form-control" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" onChange={handleInput} className="form-control" />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <label className="form-check-label">
                                I Accept the <a href="#">terms and conditions</a>
                            </label>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type="submit" className="promtBtn btn-primary rounded-5 w-50">Submit</button>

                        </div>
                    </form>
                    <hr />
                    <div className='d-flex w-100 flex-column justify-items-center align-items-center justify-content-center'>

                        <p className="text-center">I already have an account ?</p>
                        <Link to="/login">
                            <button className="promtBtn btn-outline-primary rounded-5 ">Login</button>
                        </Link>
                    </div>
                </div>}
                {loading &&
                 <div className='loader-wrapper'>
                    <p> Please Wait !..</p>
                    <div className='loader'></div>
                 </div>
                 }
            </div>
        </div>
    );
};
