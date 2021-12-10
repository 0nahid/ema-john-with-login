import './Register.css';
import { Link } from 'react-router-dom';
export default function Register() {
    return (
        <div className="register">
            <div>
                <h2>Register: Create Account</h2>
                <form >
                    <input type="email" name="email" id="email" placeholder='Enter email' />
                    <br />
                    <input type="password" name="password" id="password" placeholder='Enter password' />
                    <input type="password" name="password" id="password" placeholder='Re-enter password' />
                    <br />
                    <input className='submit-btn' type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login here</Link> </p>
                <div>--------or--------</div>
                <button>Login with Google</button>
            </div>
        </div>
    )
}
