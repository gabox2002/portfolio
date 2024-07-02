import React from 'react'

const courses = [
  {
    title: 'Curso de React',
    institution: 'Plataforma 1',
    duration: '2021',
    description: 'Descripción del curso de React.'
  }
];

function Courses() {
  return (
    <section id="courses">
      <h2>Cursos Realizados</h2>
      {courses.map((course, index) => (
        <div key={index} className="course">
          <h3>{course.title}</h3>
          <h4>{course.institution}</h4>
          <p>{course.duration}</p>
          <p>{course.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Courses
