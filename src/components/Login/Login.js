import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css';
export default function Login() {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from.pathname || '/';
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => { history.push(redirect_url) }).then(error => { console.log(error) })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form >
                    <input type="email" name="email" id="email" placeholder='Enter email' />
                    <br />
                    <input type="password" name="password" id="password" placeholder='Enter password' />
                    <br />
                    <input className='submit-btn' type="submit" value="Submit" />
                </form>
                <p>new to ema john? <Link to="/register">Create an account!</Link> </p>
                <div>-----------or---------</div>
                <div>
                    <button onClick={handleGoogleSignIn}>Login with Google</button>
                </div>
            </div>
        </div>
    )
}
