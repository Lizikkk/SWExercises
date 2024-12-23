import { Link, Outlet } from 'react-router-dom';
import '../styles/layout.css'

const LinkLayout = () => {
    return(
        <nav className='navbar'>
            <div className='nav-links'>
            <Link to={'/'} className='link'>Home</Link>
            <Link to={'/about'} className='link'>About</Link>
            </div>

            <Outlet/>
        </nav>
    )
}

export default LinkLayout;