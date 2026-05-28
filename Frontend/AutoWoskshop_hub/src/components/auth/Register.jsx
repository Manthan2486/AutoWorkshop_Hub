import "./Register.css";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <form>
        <div className="main">
          <div className="card1">
            <div className="card2">
              <div className="title">
                <h2>AUTOWORKSHOP HUB</h2>
                <p>Create your account </p>
              </div>
              <br />
              <br />
              <div className="inputs">
                <label htmlFor="name" className="loginlabel">
                  Full name
                </label>
                <br />
                <input type="text" className="logininput" />
                <br />
                <br />
                <label htmlFor="email" className="loginlabel">
                  Email
                </label>
                <br />
                <input type="email" className="logininput" />
                <br />
                <br />
                <label htmlFor="phone-n" className="loginlabel">
                  Phone number
                </label>
                <br />
                <input type="tel" className="logininput" />
                <br />
                <br />
                <label htmlFor="pass" className="loginlabel">
                  Password
                </label>
                <br />
                <input type="password" className="logininput" />
                <br />
                <br />
                <label htmlFor="photo" className="loginlabel">
                  Profile Photo (Optional)
                </label>
                <br />
                <input type="file" accept="image/*" />
                <br />
                <br />
                <button type="submit" className="subbtn">
                  Create account
                </button>
                <br />
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
                    Already have an account?
                    <a href="/"> Login</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="card3">
              <h2>Join AutoDetail</h2>
              <h3>
                Experience premium auto care with real-time tracking,
                transparent billing, and exceptional service quality.
              </h3>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
