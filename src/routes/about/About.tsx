import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { CSSTransition } from 'react-transition-group'

import { useNavSignal, ContextType } from "../../components/nav/Nav"

const About = () => {
    const { nav, reactiveFunc }: ContextType = useNavSignal()
    const location = useLocation()
    const refContainer = useRef<HTMLHeadElement>(null)
    const [sectionState, setSectionState] = useState(false)

    useEffect(() => {
        showContent()
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
                <h1>About section</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto nostrum quasi explicabo porro saepe nemo ab,
                    nesciunt minus consectetur quisquam quas earum cupiditate
                    eaque doloribus non repellat neque officiis in.
                </p>
            </header>
        </CSSTransition>
    )
}

export default About