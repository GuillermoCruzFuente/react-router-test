import { useEffect, useState } from "react"
import { NavLink, Link, Outlet, useNavigate, useLocation } from "react-router-dom"

//styles
import './Nav.scss'

//types
import { Navigation } from "../../types/Navigation"

const timer = (ms: number) => new Promise(res => setTimeout(res, ms))

const Nav = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [clickedLink, setClickedLink] = useState<Navigation | null>(null)

    const navigateWithDelay = async (to: string) => {
        setClickedLink({
            from: location.pathname,
            to: to
        })
        await timer(1000)
        navigate(to)
    }

    return (
        <>
            <nav>
                <div className="nav-main-container">
                    <Link className="logo" to={'/'} onClick={(e) => { e.preventDefault(); navigateWithDelay('/') }}>Router</Link>

                    <div className="nav-links-container">
                        <NavLink className="nav-link" to={'/'} onClick={(e) => { e.preventDefault(); navigateWithDelay('/') }}>Home</NavLink>
                        <NavLink className="nav-link" to={'/about'} onClick={(e) => { e.preventDefault(); navigateWithDelay('/about') }}>About</NavLink>
                        <NavLink className="nav-link" to={'/projects'} onClick={(e) => { e.preventDefault(); navigateWithDelay('/projects') }}>Projects</NavLink>
                        <NavLink className="nav-link" to={'/contact'} onClick={(e) => { e.preventDefault(); navigateWithDelay('/contact') }}>Contact</NavLink>
                    </div>
                </div>
            </nav>

            <div>
                <Outlet context={clickedLink} />
            </div>
        </>
    )
}

export default Nav