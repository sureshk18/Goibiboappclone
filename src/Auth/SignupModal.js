
import { React, useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider'

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
function SignupModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { Signup } = useContext(AuthContext)

    function handleSignup(e) {
        Signup({ email, password })
        e.preventDefault();
    }


    return (
        <div>
            <Button onClick={handleOpen} style={{ marginTop: '20px' }} onSubmit={handleSignup}>Signup</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <h1 style={{ alignItems: 'center', marginLeft: '100px' }}> Signup</h1>
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        Name:
                    </Typography>
                    <input type="text" id="username" name="name" required placeholder='Name' />
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        Email:
                    </Typography>
                    <input type="email" id="email" name="username" value={email} required placeholder='Email' onChange={setEmail} />
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        Password:
                    </Typography>
                    <input type="text" id="username" name="username" value={password} required placeholder='Password' onChange={setPassword} />
                    <Button variant="contained" disableElevation style={{ marginTop: '30px' }} >
                        Sign up
                    </Button>
                </Box>

            </Modal>
        </div>
    );
}


export default SignupModal;