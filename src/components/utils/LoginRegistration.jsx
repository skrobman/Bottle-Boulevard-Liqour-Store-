import React, { useState, useEffect, useRef } from 'react';

const LoginRegistration = ({ closePopup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const popupRef = useRef(null);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login or registration logic based on isLogin state
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={isLogin ? 'login-popup' : 'sign-popup'}>
      <div className={isLogin ? 'login-popup-content' : 'sign-popup-content'} ref={popupRef}>
        <h1>{isLogin ? 'Login to your account' : 'Create your account'}</h1>
        <p>{isLogin ? 'Enter your mail and password' : 'Please fill the information below'}</p>
        {!isLogin && (
          <>
            <input type="email" placeholder="Email" className="pop-input border-gray-300 rounded-sm" />
            <input type="text" placeholder="First Name" className="pop-input border-gray-300 rounded-sm" />
            <input type="text" placeholder="Last Name" className="pop-input border-gray-300 rounded-sm" />
          </>
        )}
        {isLogin && <input type="email" placeholder="Email" className="pop-input border-gray-300 rounded-sm" />}
        <input type="password" name="password" placeholder="Password" className="pop-input border-gray-300 rounded-sm" />
        <button onClick={handleSubmit}>{isLogin ? 'Login' : 'Sign up'}</button>
        <small>
          {isLogin ? 'New customer?' : 'Have an account?'}
          <a href="#" onClick={toggleForm}>{isLogin ? 'Create your account' : 'Login to your account'}</a>
        </small>
      </div>
    </div>
  );
};

export default LoginRegistration;
