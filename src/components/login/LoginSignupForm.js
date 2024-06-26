// import React, { useState } from "react";
// import { Modal, Typography, Box, TextField } from "@mui/material";
// import { setIsLoginPopup } from "../../utils/redux/authSlice";
// import { useDispatch } from "react-redux";
// import CancelIcon from "@mui/icons-material/Cancel";

// const Login = () => {
//   const style = {
//     position: "absolute",
//     top: "30%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "white",
//     padding: "5%",
//     borderRadius: "10px",

//     "@media (max-width: 768px)": {
//       width: "90%",
//     },
//   };
//   const dispatch = useDispatch();
//   const [open, setOpen] = useState(true);
//   const handleClose = () => {
//     setOpen(false);
//     dispatch(setIsLoginPopup(false));
//   };
//   return (
//     <React.Fragment>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         sx={{ position: "absolute", top: "30%" }}
//       >
//         <Box sx={style}>
//           <form action="" className="flex flex-col gap-4">
//             <h1 className="font-bold text-2xl">LOGIN</h1>
//             <TextField label="Email" fullWidth />
//             <TextField label="Password" fullWidth />
//             <button className="w-full bg-orange-600 rounded-lg p-2 text-white font-bold">
//               Login
//             </button>
//             <p className="text-sm ">
//               By proceeding, you agree to GoIbibo’s Privacy Policy, User
//               Agreement and Terms of Service
//             </p>
//           </form>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// };

// export default Login;

/*******************************
 Forms for login and signup.
 *******************************/

import React, { useRef, useState } from "react";
//  import { useAuthContext } from "../../Contexts/AuthProvider";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// import loginSignupImg from "../../assets/login-signup-banner.png";
import { BiSolidError } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn, setShowLoginSignupForm, setToken, setUserDetails } from "../../utils/redux/authSlice";
import { baseUrl, projectId } from "../../utils/constant";
// import {useMediaQuery} from '@mui/material';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "450px",
  width: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 14,
  borderRadius:'10px'
};
const inputLabelProps = {
  shrink: true,
  color: "secondary",
};
const buttonSX = {
  color: "#fff",
  m: "auto",
  py: 1,
  px: 7,
  width: "100%",
  fontWeight: 400,
  fontSize: "12px",
  borderRadius: "2px",
  backgroundColor: "secondary.hover",
  ":hover": { backgroundColor: "secondary.hover" },
  boxShadow: 5,
};
const popperSX = {
  border: 0,
  py: 0.5,
  px: 1,
  fontSize: "12px",
  bgcolor: "rgba(255,0,0,0.1)",
  color: "#D50000",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  mt: "0px",
  borderBottomRightRadius: "5px",
  borderBottomLeftRadius: "5px",
};
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
function LogInTab() {
  //  const { setShowLoginSignupForm, logIn } = useAuthContext();
  const dispatch=useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [errorMesaage, setErrorMessage] = useState("");
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const loginButtonRef = useRef();
  // const [user,setUser]=useState({name:"user",email:"user@gmail.com"});
  async function handleLoginButton(e) {
    e.preventDefault();
    if (loginEmailRef.current.value === "") {
      setErrorMessage("Please Enter Email!");
      loginEmailRef.current.focus();
      setAnchorEl(loginEmailRef.current);
      return;
    }
    if (!isValidEmail(loginEmailRef.current.value)) {
      setErrorMessage("Invalid Email! Please Enter Valid Email.");
      loginEmailRef.current.focus();
      setAnchorEl(loginEmailRef.current);
      return;
    }
    if (loginPasswordRef.current.value === "") {
      setErrorMessage("Please Enter Password!");
      loginPasswordRef.current.focus();
      setAnchorEl(loginPasswordRef.current);
      return;
    }
    const body = {
      email: loginEmailRef.current.value,
      password: loginPasswordRef.current.value,
      appType: "bookingportals",
    };
    const apiUrl = baseUrl + `login`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        projectId: projectId,
      },
      body: JSON.stringify(body),
    });
    const jsonData = await response.json();
    // console.log(jsonData);
    if (response.ok) {
      dispatch(setUserDetails(JSON.stringify({ name: jsonData.data.user.name, email: jsonData.data.user.email })))
      // setUser({ name: jsonData.data.user.name, email: jsonData.data.user.email });
      dispatch(setShowLoginSignupForm(false));
      dispatch(setIsLoggedIn(true));
      dispatch(setToken(jsonData.token));
      // window.localStorage.setItem("userDetails",JSON.stringify(user));
    } else{
      setErrorMessage("Incorrect EmailId or Password");
      setAnchorEl(loginButtonRef.current);
      return;
    }
    
      
    
    //  logIn(user).then((res) => {
    //    if (res && res.message == "Incorrect EmailId or Password") {
    //      setErrorMessage("Incorrect EmailId or Password");
    //      // loginEmailRef.current.focus();
    //      setAnchorEl(loginButtonRef.current);
    //      return;
    //    } else {
    //      setShowLoginSignupForm(false);
    //    }
    //  });
  }
  function removeError() {
    setErrorMessage("");
    setAnchorEl(null);
  }
  return (
    <form 
      onSubmit={handleLoginButton}
      style={{ display: "flex", flexDirection: "column", gap: "15px" }}
    >
      <Typography variant="h5" component="h1" color={"rgba(0,0,0,0.87)"}>
        Log in
      </Typography>
      <TextField
        label="Enter Your Email"
        onChange={removeError}
        type="text"
        inputRef={loginEmailRef}
        InputLabelProps={{ ...inputLabelProps }}
        variant="standard"
      />
      <TextField
        onChange={removeError}
        label="Enter Your Password"
        inputRef={loginPasswordRef}
        InputLabelProps={{ ...inputLabelProps }}
        variant="standard"
        type="password"
      />
      <button
        ref={loginButtonRef}
        type="submit"
        className="text-white bg-blue-700 py-1 px-7 font-medium rounded-md shadow-lg"
      >
        Login
      </button>
      <Popper
        disablePortal
        placement="bottom-start"
        open={anchorEl != null}
        anchorEl={anchorEl}
        sx={{ zIndex: 2000 }}
      >
        <Box
          sx={{
            ...popperSX,
            mt: anchorEl === loginButtonRef.current ? 1.5 : 0,
          }}
          textAlign={"center"}
        >
          <BiSolidError size="15px" />{" "}
          <Typography fontSize={12}>{errorMesaage}</Typography>
        </Box>
      </Popper>
    </form>
  );
}
function SignUpTab() {
  //  const { setShowLoginSignupForm, signUp } = useAuthContext();
  const dispatch=useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [errorMesaage, setErrorMessage] = useState("");
  const signupNameRef = useRef();
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();
  const signupConfirmPasswordRef = useRef();
  async function handleSignUpButton(e) {
    e.preventDefault();
    if (signupNameRef.current.value == "") {
      setErrorMessage("Please Enter Your Name!");
      signupNameRef.current.focus();
      setAnchorEl(signupNameRef.current);
      return;
    }
    if (signupEmailRef.current.value == "") {
      setErrorMessage("Please Enter Email!");
      signupEmailRef.current.focus();
      setAnchorEl(signupEmailRef.current);
      return;
    }
    if (!isValidEmail(signupEmailRef.current.value)) {
      setErrorMessage("Invalid Email! Please Enter Valid Email.");
      signupEmailRef.current.focus();
      setAnchorEl(signupEmailRef.current);
      return;
    }
    if (signupPasswordRef.current.value == "") {
      setErrorMessage("Please Enter Password!");
      signupPasswordRef.current.focus();
      setAnchorEl(signupPasswordRef.current);
      return;
    }
    if (signupConfirmPasswordRef.current.value == "") {
      setErrorMessage("Please Re-enter Password!");
      signupConfirmPasswordRef.current.focus();
      setAnchorEl(signupConfirmPasswordRef.current);
      return;
    }
    if (
      signupPasswordRef.current.value != signupConfirmPasswordRef.current.value
    ) {
      setErrorMessage("Passwords Don't Match!");
      signupConfirmPasswordRef.current.focus();
      setAnchorEl(signupConfirmPasswordRef.current);
      return;
    }
    const user = {
      name:
        signupNameRef.current.value.at(0).toUpperCase() +
        signupNameRef.current.value.substring(1),
      email: signupEmailRef.current.value,
      password: signupPasswordRef.current.value,
    };
    const body = {
      name:
        signupNameRef.current.value.at(0).toUpperCase() +
        signupNameRef.current.value.substring(1),
      email: signupEmailRef.current.value,
      password: signupPasswordRef.current.value,
      appType: "bookingportals",
    };
    const apiUrl = baseUrl + `signup`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        projectId: projectId,
      },
      body: JSON.stringify(body),
    });
    const jsonData = await response.json();
    // console.log(jsonData);
    if (response.ok) {
      dispatch(setUserDetails(JSON.stringify({ name: jsonData.data.user.name, email: jsonData.data.user.email })))
      dispatch(setShowLoginSignupForm(false));
      dispatch(setIsLoggedIn(true));
      dispatch(setToken(jsonData.token));
    } else {
     
        setErrorMessage("Account already exists on this email! Please Login.");
        setAnchorEl(signupEmailRef.current);
        return;
      
    }
    //  signUp(user).then((res) => {
    //    if (res && res.message == "User already exists") {
    //      setErrorMessage(
    //        "Account already exists on this email! Please Login."
    //      );
    //      signupEmailRef.current.focus();
    //      setAnchorEl(signupEmailRef.current);
    //      return;
    //    } else {
    //      setShowLoginSignupForm(false);
    //    }
    //  });
  }
  function removeError() {
    setErrorMessage("");
    setAnchorEl(null);
  }
  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      onSubmit={handleSignUpButton}
    >
      <Typography variant="h5" component="h2" color={"rgba(0,0,0,0.87)"}>
        Sign up 
      </Typography>
      <TextField
        onChange={removeError}
        label="Enter Your Name"
        inputRef={signupNameRef}
        InputLabelProps={{ ...inputLabelProps }}
        variant="standard"
      />
      <TextField
        onChange={removeError}
        label="Enter Your Email"
        inputRef={signupEmailRef}
        InputLabelProps={{ ...inputLabelProps }}
        variant="standard"
      />
      <TextField
        onChange={removeError}
        inputRef={signupPasswordRef}
        label="Enter Password"
        InputLabelProps={{ ...inputLabelProps }}
        variant="standard"
        type="password"
      />
      <TextField
        onChange={removeError}
        inputRef={signupConfirmPasswordRef}
        label="Confirm Password"
        InputLabelProps={{ ...inputLabelProps }}
        variant="standard"
        type="password"
      />
      <button
        type="submit"
        className="text-white bg-blue-700 py-1 px-7 font-medium rounded-md shadow-lg"
      >
        SignUp
      </button>
      <Popper
        placement="bottom-start"
        open={anchorEl != null}
        anchorEl={anchorEl}
        sx={{ zIndex: 2000 }}
      >
        <Box sx={{ ...popperSX }}>
          <BiSolidError size="15px" />{" "}
          <Typography fontSize={12}>{errorMesaage}</Typography>
        </Box>
      </Popper>
    </form>
  );
}
// Pannel so that user can switch between login and signup tabs
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
export default function LoginSignupForm() {
  const [tab, setTab] = React.useState(0);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  const showLoginSignupForm = useSelector(
    (store) => store.auth.showLoginSignupForm
  );
  // const smallScreen=useMediaQuery('(max-width:650px)');
  const handleOpen = () => dispatch(setShowLoginSignupForm(true));
  const handleClose = () => dispatch(setShowLoginSignupForm(false));

  return (
    <Modal style={{height:'auto'}}
      open={showLoginSignupForm}
      onClose={handleClose}
      disableScrollLock
      keepMounted
    >
      <Stack sx={style} direction={"row"}>
        {/* {!smallScreen && <img src={loginSignupImg} style={{ width: "300px" }} />} */}
        <Stack
          className="signup-login-form"
          direction={"column"}
          sx={{ px: 6, py: 0, width: "400px",height:'80px' }}
        >
          <Tabs
            variant="fullWidth"
            textColor="secondary"
            indicatorColor="secondary"
            value={tab}
            onChange={handleChange}
          >
            <Tab disableRipple label="LogIn" />
            <Tab disableRipple label="SignUp" />
          </Tabs>
          <CustomTabPanel value={tab} index={0}>
            <LogInTab handleModalClose={handleClose} />
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={1}>
            <SignUpTab handleModalClose={handleClose} />
          </CustomTabPanel>
        </Stack>
      </Stack>
    </Modal>
  );
}
