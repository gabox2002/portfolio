import React from 'react'
import Icon from './Icon'

function Tools() {
  return (
    <section id="tools">
      <h2>Herramientas de Trabajo</h2>
      <div className="tools-list">
        <div className="fa-icon-container">
          <Icon icon={["fab", "html5"]} />
        </div>
        <div className="fa-icon-container">
          <Icon icon={["fab", "css3-alt"]} />
        </div>
        <div className="fa-icon-container">
          <Icon icon={["fab", "sass"]} />
        </div>
        <div className="fa-icon-container">
          <Icon icon={["fab", "js"]} />
        </div>
        <div className="fa-icon-container">
          <Icon icon={["fab", "python"]} />
        </div>
        <div className="fa-icon-container">
          <Icon icon={["fab", "react"]} />
        </div>
        <div className="fa-icon-container">
          <Icon icon={["fab", "node"]} />
        </div>
      </div>
    </section>
  );
}

export default Tools
