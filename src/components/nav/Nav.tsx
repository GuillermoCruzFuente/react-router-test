import { BaseSyntheticEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { NavLink, Link, Outlet, useNavigate, useLocation, useOutletContext } from "react-router-dom"

//styles
import './Nav.scss'

//types
import { Navigation } from "../../types/Navigation"
import routes, { RouteType } from "../../routes/routes"

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
    const navLogoRef = useRef<HTMLAnchorElement>(null)

    const signal: ContextType = {
        nav: clickedLink,
        reactiveFunc: setReadyToNavigate
    }

    const propagateNavigationSignal = async (to: string) => {
        setClickedLink({
            from: location.pathname,
            to: to
        })

        if (to === '/') {
            navLogoRef.current!.style.opacity = '0'
        } else {
            navLogoRef.current!.style.opacity = '1'
        }

        disableLinks()

        setReadyToNavigate(false)
    }

    useEffect(() => {
        if (location.pathname != '/') {
            navLogoRef.current!.style.opacity = '1'
        }
    }, [])

    useEffect(() => {
        if (readyToNavigate) {
            if (clickedLink) {
                navigate(clickedLink.to!)
                enableLinks()
            }
        }
    }, [readyToNavigate])

    const disableLinks = () => {
        const links = document.getElementsByClassName('nav-link') as HTMLCollectionOf<HTMLAnchorElement>

        for (const link of links) {
            link.style.pointerEvents = 'none'
        }
    }

    const enableLinks = () => {
        const links = document.getElementsByClassName('nav-link') as HTMLCollectionOf<HTMLAnchorElement>

        for (const link of links) {
            link.style.pointerEvents = 'all'
        }
    }

    return (
        <>
            <nav>
                <div className="nav-main-container">
                    <Link ref={navLogoRef} className="nav-logo" to={'/'} onClick={(e) => { e.preventDefault(); propagateNavigationSignal('/') }}>RouterTest</Link>

                    <div className="nav-links-container">
                        {
                            routes.map((route: RouteType) => {
                                return (
                                    <NavLink
                                        className="nav-link"
                                        to={route.path}
                                        onClick={(event: BaseSyntheticEvent) => {
                                            event.preventDefault()
                                            event.currentTarget.style.pointerEvents = 'none'
                                            propagateNavigationSignal(route.path)
                                        }}
                                        key={route.path}
                                    >
                                        {route.text}
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </nav>

            <div style={{ width: '85%', margin: '2rem auto' }}>
                <Outlet context={signal} />
            </div>
        </>
    )
}

export default Nav