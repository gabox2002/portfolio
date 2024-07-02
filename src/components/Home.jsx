import React from 'react'
import { ReactTyped as Typed } from 'react-typed'


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="overlay">
        <h1>Gabriel Quispe</h1>
        <p>
          I'm <Typed
            className="typed-text"
            strings={[
              'Full Stack Engineer',
              'Python Developer',
              'MERN Stack',
              'Tester QA Manual'
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </p>
      </div>
    </section>
  );
}

export default Home
