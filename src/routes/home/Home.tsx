import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { CSSTransition } from 'react-transition-group'

import { useNavSignal, ContextType } from "../../components/nav/Nav"
import './Home.scss'

const Home = () => {
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
            <header ref={refContainer} id="home">
                <h1 id="logo-home">RouterTest</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus nihil, inventore modi, ut quos quas repellat maxime,
                    repudiandae id odit quidem unde. Ducimus consequatur esse quis
                    sunt doloremque reiciendis dolor.
                </p>

                <hr />

                <h2>Features</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia necessitatibus molestiae pariatur quas dolorem corporis doloribus cum. Officiis ab quidem corporis debitis culpa maxime? Quos laboriosam quis, reprehenderit beatae deleniti numquam cupiditate nostrum expedita et iste in natus, consectetur totam inventore dignissimos nobis repudiandae porro quas praesentium. Quod beatae neque officia ut dolorum tempora cupiditate molestias laboriosam optio possimus.
                </p>
            </header>
        </CSSTransition>
    )
}

export default Home