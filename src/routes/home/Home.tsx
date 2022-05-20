import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { CSSTransition } from 'react-transition-group'

import { useNavSignal, ContextType } from "../../components/nav/Nav"

const Home = () => {
    const { nav, reactiveFunc }: ContextType = useNavSignal()
    const location = useLocation()
    const refContainer = useRef<HTMLHeadElement>(null)
    const [sectionState, setSectionState] = useState(false)

    useEffect(() => {
        showContent()
        console.log('home nav state:', nav)
        if (nav) {
            console.log(nav.to)
            if (nav.to != location.pathname) {
                hideContent()
            }
        }

        return () => {
            console.log('home unmounted')
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