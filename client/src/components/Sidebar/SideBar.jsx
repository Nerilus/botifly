import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { Icon, Divider } from '@tremor/react'
import { LogoutIcon } from '@heroicons/react/outline'
import getUserData  from '../../utils/user.constants'
import { Bot, LayoutDashboard, LogOut, Sparkles, User2, UserSquare2, Users } from 'lucide-react';
// import { LogoutIcon } from '@heroicons/react/outline'



const userData = getUserData()

  const SideBar = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
      <div className="sidebar">
        <div className="container-box h-full flex flex-col justify-between">
          <div className="sidebar-top">
            <div className="sidebar-top__logo">
              {/* <span>botifly</span> */}
            </div>
            <div className="sidebar-top__pages">
            <ul>
          <li>
            <Link
            >
            <LayoutDashboard size={28} strokeWidth={1.25} />
              <p className="size-18">Tableau de bord </p>
            </Link>
          </li>
          <li>
            <Link
            >
                <Sparkles size={28} strokeWidth={1.25} /> 
                <p className="size-18">Nos Services </p>
            </Link>
            </li>
            <li>
            <Link
            >
            <Bot size={28} strokeWidth={1.25} />              
            <p className="size-18">Your Bots</p>
            </Link>
          </li>
          <li>
            <Link
            >
              <Users size={28} strokeWidth={1.25} />
              <p className="size-18">Utilisateurs</p>
              </Link>
          </li>
      </ul>
            </div>
          </div>
          <div className="sidebar__bottom">
          <Divider />
            <div className="user-container">
              <ul type="button" className='btn'>
                <li className="user-container__top">
                <Icon icon={User2 } color="default" />
                  <p className="size-18">{userData.username}</p>
                  <LogoutIcon icon={User2 } color="default" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SideBar;
  