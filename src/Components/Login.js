import React from 'react'
import Header from './Header';
import Footer from './Footer';
export default function Login() {
  return (
    <>
    <Header/>
    {/* <nav className="navbar navbar-expand-sm bg-dark navbar-dark"> */}
  {/* </nav> */}
  <div className="box">
    <div className="container">
      <div className="top-header">
        {/* <header>Have an account?</header> */}
        <header>Login</header>
      </div>
      <div className="input-field">
        <input
          type="text"
          className="input"
          placeholder="Username"
          required=""
        />
      </div>
      <div className="input-field">
        <input
          type="password"
          className="input"
          placeholder="password"
          required=""
        />
      </div>
      <div className="input-field">
        <form action='/Adminpage'>
        <input type="submit" className="submit" defaultValue="login" /></form>
      </div>
      <div className="bottom">
        <div className="left">
          <input type="checkbox" id="check" />
          <label htmlFor="check">Remember Me</label>
        </div>
        <div className="right">
          <label>
            <a href="#">Forgot password?</a>
          </label>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </>
  );
}
