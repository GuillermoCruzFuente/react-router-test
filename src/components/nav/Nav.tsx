import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { NavLink, Link, Outlet, useNavigate, useLocation, useOutletContext } from "react-router-dom"

//styles
import './Nav.scss'

//types
import { Navigation } from "../../types/Navigation"

export type ContextType = {
    nav: Navigation | null,
    reactiveFunc: Dispatch<SetStateAction<boolean>>
}

export const useNavSignal = () => useOutletContext<ContextType>()

const Nav = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [clickedLink, setClickedLink] = useState<Navigation | null>(null)
    const [readyToNavigate, setReadyToNavigate] = useState<boolean>(false)

    const signal: ContextType = {
        nav: clickedLink,
        reactiveFunc: setReadyToNavigate
    }

    const sendNavSignal = async (to: string) => {
        setClickedLink({
            from: location.pathname,
            to: to
        })

        setReadyToNavigate(false)
    }

    useEffect(() => {
        if (readyToNavigate) {
            console.log('listo para navegar')
            if (clickedLink) {
                navigate(clickedLink.to!)
            }
        }
    }, [readyToNavigate])

    return (
        <>
            <nav>
                <div className="nav-main-container">
                    <Link className="logo" to={'/'} onClick={(e) => { e.preventDefault(); sendNavSignal('/') }}>RouterTest</Link>

                    <div className="nav-links-container">
                        <NavLink className="nav-link" to={'/'} onClick={(e) => { e.preventDefault(); sendNavSignal('/') }}>Home</NavLink>
                        <NavLink className="nav-link" to={'/about'} onClick={(e) => { e.preventDefault(); sendNavSignal('/about') }}>About</NavLink>
                        <NavLink className="nav-link" to={'/projects'} onClick={(e) => { e.preventDefault(); sendNavSignal('/projects') }}>Projects</NavLink>
                        <NavLink className="nav-link" to={'/contact'} onClick={(e) => { e.preventDefault(); sendNavSignal('/contact') }}>Contact</NavLink>
                    </div>
                </div>
            </nav>

            <div style={{ width: '70%', margin: '2rem auto' }}>
                <Outlet context={signal} />
            </div>
        </>
    )
}

export default Nav