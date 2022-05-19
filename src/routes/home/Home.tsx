import { useEffect, useRef, useState } from "react"
import { useLocation, useOutletContext } from "react-router-dom"
import { CSSTransition } from 'react-transition-group'

import { Navigation } from "../../types/Navigation"

const Home = () => {
    const navigationItem: Navigation = useOutletContext()
    const location = useLocation()
    const refContainer = useRef<HTMLHeadElement>(null)
    const [sectionState, setSectionState] = useState(false)

    useEffect(() => {
        showContent()
    }, [])

    useEffect(() => {
        if (navigationItem) {
            if (navigationItem.to != location.pathname) {
                hideContent()
            }
        }
    }, [navigationItem])

    const showContent = () => {
        setSectionState(true)
    }

    const hideContent = () => {
        setSectionState(false)
    }

    return (
        <CSSTransition in={sectionState} nodeRef={refContainer} timeout={800} classNames="page" mountOnEnter unmountOnExit>
            <header ref={refContainer}>
                <h1>Home section</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus nihil, inventore modi, ut quos quas repellat maxime,
                    repudiandae id odit quidem unde. Ducimus consequatur esse quis
                    sunt doloremque reiciendis dolor.
                </p>
            </header>
        </CSSTransition>
    )
}

export default Home