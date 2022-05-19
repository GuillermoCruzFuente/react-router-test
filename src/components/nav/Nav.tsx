import { NavLink, Link, Outlet } from "react-router-dom"

//styles
import './Nav.scss'

const Nav = () => {
    return (
        <>
            <nav>
                <div className="nav-main-container">
                    <Link className="logo" to={'/'}>Router</Link>

                    <div className="nav-links-container">
                        <NavLink className="nav-link" to={'/'}>Home</NavLink>
                        <NavLink className="nav-link" to={'/about'}>About</NavLink>
                        <NavLink className="nav-link" to={'/projects'}>Projects</NavLink>
                        <NavLink className="nav-link" to={'/contact'}>Contact</NavLink>
                    </div>
                </div>
            </nav>

            <div>
                <Outlet context={'a'}/>
            </div>
        </>
    )
}

export default Nav