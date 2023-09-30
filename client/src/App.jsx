import { useState } from 'react'

import './assets/css/reset.css';
import './assets/css/texts.css';
import './assets/css/components/buttons.css';
import './assets/css/components/box.css';
import './assets/css/components/photo-profile.css';
import './assets/css/pages/page-home.css';
import './assets/css/pages/page-depenses.css';
import './assets/css/pages/page-login-register.css';
import './assets/css/modales/modale-mes-colocs.css';
import './assets/css/modales/modale-add-modify-remboursement-depense.css';
import viteLogo from '/vite.svg'
import Login from './views/auth/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
    </>
  )
}

export default App
