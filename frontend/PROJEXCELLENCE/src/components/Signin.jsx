import  { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';


import svgLogo from'/src/assets/slogo.svg'

import './css/signin.css'; // Assuming the CSS is saved in a separate file

const Signin = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div>
    
      <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="container">
        {/* Sign Up Form */}
       
        <div className="form-container sign-up-container">
          <form action="#" >
          <img 
              src={svgLogo} 
              alt="logo" 
              style={{ width: '200px',height:'100px', marginLeft: '-325px'}} 
              />
            <h1 className="your-class-name">Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"><FacebookRoundedIcon/></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"><AlternateEmailRoundedIcon/></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"><AttachFileRoundedIcon/></i></a>
            </div>
            <span>or use your email for registration</span>
            <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1,height:'ch' ,width: '25ch' } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Username" variant="outlined"   size="small"/>
            <TextField id="outlined-basic" label="Email" variant="outlined"  size="small"/>
            <TextField id="outlined-basic" label="Password" variant="outlined" size="small" />
          </Box>
            <button>Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
        <div className="logo_design">
          <img 
              src={svgLogo} 
              alt="logo" 
              style={{ width: '200px',height:'100px', marginLeft: '10px'}} 
              />
            </div>
            <form className='form' action="#">
              <h1 className="your-class-name">Sign in</h1>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"><FacebookRoundedIcon/></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"><AlternateEmailRoundedIcon/></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"><AttachFileRoundedIcon/></i></a>
             </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password"/>
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
          <div className="logo_design">  
            </div>
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Streamline your projects and unlock productivity. Let&apos;s get back to achieving your goals!</p>
              <br />
              <p>Sign in to manage, collaborate, and succeed</p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Join Us Today!</h1>
              <p>Start your journey toward seamless project management. Create an account and take control of your team&apos;s success.</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <footer>
       
      </footer>
    </div>
  );
}

export default Signin;
