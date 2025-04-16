import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

// Inline SVG components for better reliability
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path fill="#1877F2" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path fill="#505050" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

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
                    <div className="login-image">
                        <div className="login-logo-container">
                            <img 
                                src="/images/Rectangle 1434.png" 
                                alt="JET SETTERS" 
                                className="login-logo-image"
                            />
                        </div>
                    </div>

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
                                    required
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
                                    required
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
                                type="submit"
                            >
                                {processing ? 'Signing in...' : 'Sign In'}
                            </button>
                            <div className="login-divider">or continue with</div>
                            <div className="social-login">
                                <button type="button" className="social-button">
                                    <GoogleIcon />
                                </button>
                                <button type="button" className="social-button">
                                    <FacebookIcon />
                                </button>
                                <button type="button" className="social-button">
                                    <EmailIcon />
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