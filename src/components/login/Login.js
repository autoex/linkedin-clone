import React from 'react';
import './Login.css'
import Logo from '../../app/assets/img/LinkedIn.png'
import Button from "@material-ui/core/Button";

const Login = () => {
    const register =()=> {}
    const loginToApp =()=> {}
    return (
        <div className='app__login'>
            <img src={Logo} alt="LinkedIn" className='logo'/>
            <form action="" className='login__form'>
                <input type="text" placeholder='Input your name'/>
                <input type="text" placeholder='Profile pic URL(optional)'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <Button variant="contained" color="primary" type='submit'>
                    Sing In
                </Button>
                <p>Not a member? <span onClick={register} className='login_register'>Register Now</span></p>
            </form>
        </div>
    );
};

export default Login;