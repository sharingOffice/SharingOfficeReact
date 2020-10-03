
import '../../css/signin.css';
import React from "react";
import {authService} from '../services/home/authService';
import { GoogleLogin } from 'react-google-login';

class SignIn extends React.Component {
    
    state = { username: '', password: ''}

    // your client ID
    // 983471041526-0orv8d7imhopfncss6du98u5vr1be79q.apps.googleusercontent.com
    //983471041526-0orv8d7imhopfncss6du98u5vr1be79q.apps.googleusercontent.com

    // your client secret
    // OMTNetH_FLAhNAUSoNIvzpK4
    //OMTNetH_FLAhNAUSoNIvzpK4
    componentDidMount() {
        
        const script = document.createElement("script");
        script.src = "../assets/js/signin.js";
        script.async = true;
        document.body.appendChild(script);
    }

    handleSignin = async () => {
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        let data = {Email: username, Password:password};

        authService.signin(data)
            .then(() => {
                //const { from } = location.state || { from: { pathname: "/" } };
                //history.push(from);
                this.props.history.push("/admin/index");
            })
            .catch(error => {
                //setSubmitting(false);
                //alertService.error(error);
                console.log(error)
            });
      };

      googleResponse = (response) => {
          debugger;
        console.log(response);
        if (!response.tokenId) {
          console.error("Unable to get tokenId from Google", response)
          return;
        }

        authService.google(response.tokenId)
            .then(() => {
                //const { from } = location.state || { from: { pathname: "/" } };
                //history.push(from);
                this.props.history.push("/admin/index");
            })
            .catch(error => {
                //setSubmitting(false);
                //alertService.error(error);
                console.log(error)
            });
      };
      

render() {
    return (
        <>




            <section className="main-block">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12 article-first">
                    
                <div className="login-reg-panel">
                    <div className="login-info-box">
                        <h2>Have an account?</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <label id="label-register" htmlFor="log-reg-show">Login</label>
                        <input type="radio" name="active-log-panel" id="log-reg-show"  defaultChecked="checked"></input>
                    </div>
                                        
                    <div className="register-info-box">
                        <h2>Don't have an account?</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <label id="label-login" htmlFor="log-login-show">Register</label>
                        <input type="radio" name="active-log-panel" id="log-login-show"></input>
                    </div>
                                        
                    <div className="white-panel">
                        <div className="login-show">
                            <h2>LOGIN</h2>
                            <input type="text" placeholder="Email" id="username" value="unos.bm65@gmail.com" ></input>
                            <input type="password" placeholder="Password" id="password" value="YYyy12!@"></input>
                            <input type="button" value="Login" onClick={() => {this.handleSignin() }}></input>
                            <a href="">Forgot password?</a>

                            <GoogleLogin
                                        clientId='983471041526-0orv8d7imhopfncss6du98u5vr1be79q.apps.googleusercontent.com'
                                        buttonText="Google Login"
                                        onSuccess={this.googleResponse}
                                        onFailure={this.googleResponse}
                                    />

                        </div>
                        <div className="register-show">
                            <h2>REGISTER</h2>
                            <input type="text" placeholder="Email"></input>
                            <input type="password" placeholder="Password"></input>
                            <input type="password" placeholder="Confirm Password"></input>
                            <input type="button" value="Register"></input>
                        </div>
                    </div>
                </div>
                    
                </div>
                </div>
            </div>
            </section>

        </>
    );
  }
}


export default SignIn;