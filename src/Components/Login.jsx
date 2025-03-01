import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../Context/AppContext';
import { toast } from 'react-toastify';

export const Login = () => {
    const navigate = useNavigate();
    const [loading,setLoading]= useState(false);

    const { setShowLogin, backendUrl, setUser, setToken } = useContext(AppContext);

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const { data } = await axios.post(`${backendUrl}/api/user/login`, loginData);
            if (data.success) {
                setToken(data.token);
                setUser(data.user);
                localStorage.setItem('token', data.token); // Correctly setting the token in localStorage
                setShowLogin(false);
                toast.success('Login successful!');
                navigate('/generate-image'); // Navigating to the home page after login
            } else {
                toast.error(data.message); // Displaying error message
            }
        } catch (error) {
            console.error('Error logging in user:', error.response?.data?.message || error.message);
            toast.error('Error: ' + (error.response?.data?.message || error.message));
        }
        setLoading(false);
    };

    return (
        <div
            className="container"
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            <div className="card pb-3" style={{ width: '400px' }}>
                {!loading &&
                <div className="card-body">
                <div className="mb-3 text-center">
                    <h1 className="fw-bold">Welcome!</h1>
                    <p>Please login to continue.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Valid Email"
                            onChange={handleInput}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Your Password"
                            onChange={handleInput}
                            className="form-control"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="promtBtn rounded-5 w-50 btn-primary mb-3"
                        style={{
                            display: 'block',
                            margin: 'auto',
                            width: '50%',
                        }}
                    >
                        Login
                    </button>
                    <hr />
                    <p className='text-center'>Don't have an account ? Click Below</p>
                    <Link to="/Signup">
                        <button
                            type="button"
                            className="promtBtn rounded-5 w-50"
                            style={{
                                display: 'block',
                                margin: 'auto',
                                width: '50%',
                                border: '1px solid rgb(0,29,59)',
                                textDecoration:"none"
                            }}
                        >
                            Create Account
                        </button>
                    </Link>
                </form>
            </div>
                 }
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
