import { IoIosHome } from 'react-icons/io'
import '../assets/Scss/App.scss';
import { MdCreateNewFolder, MdSecurityUpdateGood } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { CiLogout } from 'react-icons/ci';

const Sidebar = () => {
  const location=useLocation()
  const data=[
    {
      name:'Home',
      path:'/home',
      icon:<IoIosHome />
    },
    {
      name:'Register Patient',
      path:'/createPatient',
      icon:<MdCreateNewFolder />
    },
    {
      name:'Patient Find',
      path:'/patientFind',
      icon:<MdSecurityUpdateGood />
    },{
      name:'Logout',
      path:'/logout',
      icon:<CiLogout />
    }
  ]
  return (
    <div className="Sidebar">
      <ul>
        {
          data.map((list,index)=>(
           <li key={index} className={location.pathname===list.path?'active':''}>
            <Link to={list.path}>
            {list.icon}
            <span>{list.name}</span>
            </Link>
           </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar
