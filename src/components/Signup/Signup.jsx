import React from 'react';
import '../Signup/Signup.css'

const SignInPage = () => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="css/style.css" />
        <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
        <title>Sign in</title>
      </head>
      <body>
        <div className="main">
          <p className="sign" align="center">Sign Up</p>
          <form className="form1">
            <input className="un" type="text" align="center" placeholder="Email" />
            <input className="un" type="text" align="center" placeholder="Username" />
            <input className="pass" type="password" align="center" placeholder="Password" />
            <a className="submit" align="center">Sign Up</a>
            <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
          </form>
        </div>
      </body>
    </html>
  );
};

export default SignInPage;
