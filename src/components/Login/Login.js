import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css';
export default function Login() {
    const { signInUsingGoogle } = useAuth();
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
                    <button onClick={signInUsingGoogle}>Login with Google</button>
                </div>
            </div>
        </div>
    )
}
