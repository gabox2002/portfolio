import React from 'react'

const experiences = [
  {
    company: 'Empresa 1',
    role: 'Desarrollador Frontend',
    duration: 'Enero 2020 - Presente',
    description: 'Descripción del trabajo realizado en la Empresa 1.'
  },
  {
    company: 'Empresa 2',
    role: 'Desarrollador Backend',
    duration: 'Junio 2018 - Diciembre 2019',
    description: 'Descripción del trabajo realizado en la Empresa 2.'
  }
];

function Experience() {
  return (
    <section id="experience">
      <h2>Experiencia Laboral</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience">
          <h3>{exp.company}</h3>
          <h4>{exp.role}</h4>
          <p>{exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience
