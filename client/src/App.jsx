import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './views/auth/login/Login'
import Home from './views/Home/Home'
import SideBar from './components/Sidebar/SideBar'
import './index.scss'
import ChatBox from './components/ChatBox/ChatBox'

function App() {
  return (
    <BrowserRouter>
      <div>
        <SideBar/>
      </div>
      <Routes>
          <Route>
            <Route path='/home' element={<ChatBox />} />
            <Route path='/login' element={<Login />} />
          </Route>
      </Routes>
      <div>
        <SideBar/>
      </div>
    </BrowserRouter>
  )
}

export default App
