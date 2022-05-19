import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Nav from './components/nav/Nav'

//routes
import About from './routes/about/About'
import Contact from './routes/contact/Contact'
import Home from './routes/home/Home'
import Projects from './routes/projects/Projects'

//CSSTransition classes
import './styles/css-transition.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
