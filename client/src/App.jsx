import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './views/auth/login/Login'
import Home from './views/Home/Home'
import SideBar from './components/Sidebar/SideBar'
import './index.scss'

function App() {
  return (
    <BrowserRouter>
      <div>
        <SideBar/>
      </div>
      <Routes>
          <Route>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
