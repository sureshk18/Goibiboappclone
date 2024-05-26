// import React, { useState, useRef, useContext } from 'react';
// import '../styles/Login.css';
// import axios from 'axios';
// import { useAuth } from "../Auth/AuthProvider";
// import { useLocation, useNavigate } from 'react-router-dom';

// function Login() {
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const navigate = useNavigate();
//     const [message, setMessage] = useState("");
//     // const { setIsLoggedIn } = useAuth();
//     const { state } = useLocation();

//     const loginUser = async (user) => {
//         const config = {
//             headers: {
//                 projectId: "9sa80czkq1na"
//             }
//         };

//         try {
//             const res = await axios.post(
//                 "https://academics.newtonschool.co/api/v1/bookingportals/login",
//                 { ...user, appType: "bookingportals" },
//                 config
//             );
//             const token = res.data.token;
//             if (token) {
//                 sessionStorage.setItem("userToken", token);
//                 sessionStorage.setItem("userName", JSON.stringify(res.data.data.name));
//                 sessionStorage.setItem("userEmail", JSON.stringify(res.data.data.email));
//                 setIsLoggedIn(true);
//                 if (state) {
//                     navigate(state.prevPath);
//                 } else {
//                     navigate("/flights");
//                 }
//             }
//         } catch (err) {
//             setMessage("Incorrect Email Id or Password");
//             console.log("Error:", err);
//         }
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         const userDetails = {
//             email: emailRef.current.value,
//             password: passwordRef.current.value,
//         };
//         loginUser(userDetails);
//     };


//     return (
//         <div className="login-container">
//             <h1>Login</h1>
//             <form onSubmit={handleFormSubmit}>
//                 <div className="input-group">
//                     <label htmlFor='email'>Email:</label>
//                     <input
//                         type="email"
//                         name='email'
//                         ref={emailRef}
//                     // onChange={(e) => setUsername(e.target.value)}

//                     />
//                 </div>
//                 <div className="input-group">
//                     <label htmlFor='password'>Password:</label>
//                     <input
//                         type="password"
//                         ref={passwordRef}
//                     // onChange={(e) => setPassword(e.target.value)}

//                     />
//                 </div>
//                 <button className="loginButton" type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;



import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvider'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,

};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} style={{ marginTop: '40px' }}>Login</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1 style={{ alignItems: 'center', marginLeft: '100px' }}> Login</h1>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginTop: '30px' }}>
                        Username

                    </Typography>
                    <input type="text" id="username" name="username" required />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Password
                    </Typography>
                    <input type='text' required />

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                    </Typography>

                    <Button variant="contained" disableElevation>
                        Log in
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
