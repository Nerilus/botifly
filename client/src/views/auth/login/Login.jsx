

const Login = () => {
  return (
    <div className='vh-100 page page-login page-log-reg flex-center'>
    
        <div className='login-container' >
            <div className="box-shadow-1 box-model">
                <h1 className="text-center">Se connecter</h1>
                <form >
                    <div className="fields-column">
                        <div className="fields-row">
                            <input id="loginEmail" className="form-control form-control-lg" placeholder="Adresse email"  name="username"  type="text"/>
                        </div>
                        <div className="fields-row">
                            <input id="loginPassword" className="form-control form-control-lg" placeholder="Mot de passe"  name="password"  type="password"
             />
                        </div>
                    </div>
                    <div className="bloc-btn">
                        <button type="submit" >Je me connecte</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login