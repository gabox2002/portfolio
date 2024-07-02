import React from 'react'

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1.',
    imageUrl: 'ruta/a/imagen1.jpg',
    githubUrl: 'https://github.com/tuusuario/proyecto1'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del proyecto 2.',
    imageUrl: 'ruta/a/imagen2.jpg',
    githubUrl: 'https://github.com/tuusuario/proyecto2'
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción del proyecto 3.',
    imageUrl: 'ruta/a/imagen2.jpg',
    githubUrl: 'https://github.com/tuusuario/proyecto2'
  },{
    title: 'Proyecto 4',
    description: 'Descripción del proyecto 4.',
    imageUrl: 'ruta/a/imagen2.jpg',
    githubUrl: 'https://github.com/tuusuario/proyecto2'
  },
];

function ProjectList() {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProjectList
