import React from 'react'

const education = [
  {
    institution: 'Universidad 1',
    degree: 'Ingeniería en Computación',
    duration: '2014 - 2018',
    description: 'Descripción de los estudios realizados en la Universidad 1.'
  }
];

function Education() {
  return (
    <section id="education">
      <h2>Educación</h2>
      {education.map((edu, index) => (
        <div key={index} className="education">
          <h3>{edu.institution}</h3>
          <h4>{edu.degree}</h4>
          <p>{edu.duration}</p>
          <p>{edu.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Education
