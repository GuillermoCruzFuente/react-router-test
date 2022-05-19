import { useEffect, useRef, useState } from "react"
import { useLocation, useOutletContext } from "react-router-dom"
import { CSSTransition } from 'react-transition-group'

import { Navigation } from "../../types/Navigation"


const Contact = () => {
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
                <h1>Contact section</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia impedit laborum sed quibusdam deleniti atque iste
                    consequatur laudantium illo, numquam ipsa repudiandae?
                    Consequuntur ratione odit, dolorum a libero corporis tempore.
                </p>
            </header>
        </CSSTransition>
    )
}

export default Contact