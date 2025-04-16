import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
    const navigate = useNavigate();
    
    const [data, setData] = useState({
        email: '',
        password: '',
        remember: false,
    });
    
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        setProcessing(true);
        
        // Simulate form submission
        setTimeout(() => {
            // Here you would normally make an API call
            console.log('Login data:', data);
            setProcessing(false);
            
            // Redirect to dashboard on successful login
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <div>
            <div className="login-container">
                <div className="login-card">
                    {/* Image Section */}
                    <div
                        className="login-image"
                        style={{
                            backgroundImage: `url('http://www.gerardgorman.com/uploads/1/7/8/0/17808/1a_orig.jpeg')`,
                        }}
                    ></div>

                    {/* Login Form Section */}
                    <div className="login-content">
                        <h2 className="login-title">Login</h2>
                        <form className="login-form" onSubmit={submit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    value={data.email}
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    id="email"
                                    placeholder="username@gmail.com"
                                    className="form-input"
                                />
                                {errors.email && <div className="error-message">{errors.email}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange}
                                    id="password"
                                    placeholder="Password"
                                    className="form-input"
                                />
                                {errors.password && <div className="error-message">{errors.password}</div>}
                            </div>
                            <div className="form-options">
                                <label className="remember-me">
                                    <input 
                                        type="checkbox" 
                                        name="remember"
                                        checked={data.remember}
                                        onChange={handleChange}
                                    />
                                    Remember Me
                                </label>
                                <Link
                                    to="/forgot-password"
                                    className="forgot-password"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <button 
                                className="login-button" 
                                disabled={processing}
                            >
                                {processing ? 'Signing in...' : 'Sign In'}
                            </button>
                            <div className="login-divider">or continue with</div>
                            <div className="social-login">
                                <button type="button" className="social-button">
                                    <img
                                        src="https://img.icons8.com/color/48/google-logo.png"
                                        alt="Google"
                                    />
                                </button>
                                <button type="button" className="social-button">
                                    <img
                                        src="https://img.icons8.com/ios-filled/50/facebook-new.png"
                                        alt="Facebook"
                                    />
                                </button>
                                <button type="button" className="social-button">
                                    <img
                                        src="https://img.icons8.com/?size=100&id=60688&format=png&color=000000"
                                        alt="Email"
                                    />
                                </button>
                            </div>
                        </form>
                        <p className="login-footer">
                            By proceeding, you agree to our <Link to="/privacy" className="text-link">Privacy Policy</Link> and <Link to="/terms" className="text-link">Terms of Service</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}