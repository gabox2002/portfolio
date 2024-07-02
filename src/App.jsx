import React from 'react'
import './scss/styles.scss'
import Header from './layout/Header'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Courses from './components/Courses'
import Contact from './components/Contact'
import ProjectList from './components/ProjectList'
import Tools from './components/Tools'
import Footer from './layout/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <main className="main-content">
        <About />
        <Education />
        <Courses />
        <section id="projects">
          <h2>Proyectos</h2>
          <ProjectList />
        </section>
        <Tools />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop /> 

    </div>
  );
}

export default App
