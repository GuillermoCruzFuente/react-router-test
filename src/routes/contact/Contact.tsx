import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { CSSTransition } from 'react-transition-group'

import { useNavSignal, ContextType } from "../../components/nav/Nav"

const Contact = () => {
    const { nav, reactiveFunc }: ContextType = useNavSignal()
    const location = useLocation()
    const refContainer = useRef<HTMLHeadElement>(null)
    const [sectionState, setSectionState] = useState(false)

    useEffect(() => {
        showContent()
    }, [])

    useEffect(() => {
        if (nav) {
            if (nav.to != location.pathname) {
                hideContent()
            }
        }
    }, [nav])

    const showContent = () => {
        setSectionState(true)
    }

    const hideContent = () => {
        setSectionState(false)
    }

    return (
        <CSSTransition in={sectionState} nodeRef={refContainer} timeout={350} classNames="page" mountOnEnter unmountOnExit onExited={() => reactiveFunc(true)}>
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