import Hero from './components/Hero'
import About from './components/About'
import WorkHistory from './components/WorkHistory'
import Skills from './components/Skills'
import Education from './components/Education'
import Interests from './components/Interests'
import './styles/global.css'
import './styles/Footer.css'

function App() {
  return (
    <>
      <Hero />
      <About />
      <WorkHistory />
      <Skills />
      <Education />
      <Interests />
      <footer>
        <p>&copy; {new Date().getFullYear()} Jamie Ladd. All rights reserved.</p>
        <p>Built with React + Vite | <a href="https://github.com">GitHub</a></p>
      </footer>
    </>
  )
}

export default App
