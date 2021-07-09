import React, {useState} from 'react';
import './Login.css'
import Logo from '../../app/assets/img/LinkedIn.png'
import Button from "@material-ui/core/Button";
import {auth} from "../../firebaseConf";
import {useDispatch} from "react-redux";
import {login} from "../../app/features/userSlice";


const Login = () => {
    const [open, setOpen] =useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [profilePic, setProfilePic] = useState();
    const dispatch = useDispatch();
    const register =()=> {
        if(!name) { setOpen(true);
        setTimeout(()=>{setOpen(false)},3000 )}


        auth.createUserWithEmailAndPassword(email, pass)
            .then((userAuth)=> {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(()=> {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: userAuth.user.displayName,
                            photoURL: userAuth.user.photoURL
                        }))
                    })
            })
            .catch(err=> console.log(err))

    }
    const loginToApp =(e)=> {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, pass)
            .then(userAuth=> {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: userAuth.user.photoURL
                }))
            })
            .catch(err=> console.log(err))
    }
    return (
        <div className='app__login'>
            <img src={Logo} alt="LinkedIn" className='logo'/>
            {open && <div className="alert alert-warning" role="alert">
                Enter a name
            </div>}
            <form action="" className='login__form'>
                <input type="text" value={name} placeholder='Input your name' onChange={e=>setName(e.target.value)}/>
                <input type="text" value={profilePic} placeholder='Profile pic URL(optional)'  onChange={e=>setProfilePic(e.target.value)}/>
                <input type="email" value={email} placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
                <input type="password" value={pass} placeholder='Password' onChange={e=>setPass(e.target.value)}/>
                <Button onClick={loginToApp} variant="contained" color="primary" type='submit'>
                    Sing In
                </Button>

                <p>Not a member? <span onClick={register} className='login_register'>Register Now</span></p>
            </form>
        </div>
    );
};

export default Login;