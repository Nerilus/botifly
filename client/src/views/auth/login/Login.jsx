import { useContext, useState } from 'react';
import { AuthContext } from '../../../Authcontext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@tremor/react';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const {login, logout, isAuthenficated} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) =>{
    event.preventDefault();
    try{
      await login(username, password);
      navigate('/home');
    } catch (err){
      setError(err.message)
    }
  };

  return (
    <div className="container-page">
    <div className="login-container">
      <form className="container-box login-content" onSubmit={handleSubmit}>
        <h2>Se connecter</h2>
        <label htmlFor="username">
          Adresse mail
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="exemple@gmail.com"
            name="username"
            value={username}
            onChange= {(e) => 
            setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Mot de passe
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Password"
            name="password"
            value={password}
            onChange= {(e) => setPassword(e.target.value)}
          />
        </label>
        <button className='btn' type='submit'>
          Se connecter
        </button>
      </form>
    </div>
  </div>
      );
    }

export default Login