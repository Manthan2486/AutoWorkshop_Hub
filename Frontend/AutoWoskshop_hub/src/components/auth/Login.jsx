import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="main">
        <form className="card1">
          <div className="card2">
            <div className="title">
              <h1>AUTOWORKSHOP HUB</h1>
              <p>Welcome back to your workshop</p>
            </div>

            <div className="inputs">
              <label>Your Email</label>
              <input
                type="email"
                className="logininput"
                placeholder="Enter your email"
              />

              <label>Password</label>
              <input
                type="password"
                className="logininput"
                placeholder="Enter your password"
              />

              <a href="/" className="forgot">
                Forgot password?
              </a>

              <button type="submit" className="subbtn">
                LOGIN
              </button>

              <p className="or">or continue with</p>

              <button type="button" className="googlebtn">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt="google"
                />
                Login with Google
              </button>

              <div className="signuptext">
                <p>
                  Don't have an account?
                  <Link to="/register"> Sign up</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="card3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
              alt="car"
              className="carimg"
            />

            <h2>Premium Auto Detailing</h2>

            <p>
              Track your car's service journey from inquiry to delivery with our
              comprehensive workshop management system.
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
