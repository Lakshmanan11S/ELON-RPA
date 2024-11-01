import '../assets/Scss/App.scss';
import logimg from '../assets/Image/log.jpg'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e:any) => {
    e.preventDefault(); 
    navigate('/home'); 
  };
  return (

    <div className="Login">
        <div className="row">
            <div className="col-md-6 l-first-page">
                <img src={logimg} alt=""/>
            </div>
            <div className="col-md-6 l-second-page">
          <form >
            <fieldset>
              <h2>Login</h2>
              <div className="Field">
                <label>
                  User Name <sup>*</sup>
                </label>
                <input placeholder="User Name"
                className="form-control"
                id="UserName"
                name="UserName"
                required
                />
              </div>
              <div className="Field">
                <label>
                  Password <sup>*</sup>
                </label>
                <input type="password"
                 placeholder="Password"
                 id="Password"
                 name="Password"
                 className="form-control"
                 required/>
              </div>
             <button type="submit" onClick={handleLogin}>Login</button>
            </fieldset>
          </form>
        </div>
        </div>
        </div>
  );
};

export default Login;
