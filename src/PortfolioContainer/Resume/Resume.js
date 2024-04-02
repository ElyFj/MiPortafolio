import React from "react";
import Card from "react-bootstrap/Card";
import "./Resume.css";

function BasicExample() {
  return (
    <div className="card-container">
      <Card className="projects" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../assets/aslun.png")}
          alt="AsLun"
        />
        <Card.Body>
          <Card.Title>As-Lun</Card.Title>
          <Card.Text>
            Simple page aplication en Angular con Bootstrap.
          </Card.Text>
          <a href="https://as-lun.netlify.app/home">
            <button class="Btn">Ver más</button>
          </a>
        </Card.Body>
      </Card>

      <Card className="projects" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../assets/git.png")}
          alt="Github"
        />
        <Card.Body>
          <Card.Title>Github</Card.Title>
          <Card.Text>Explora algunos de mis códigos...</Card.Text>
          <a href="https://github.com/ElyJF">
            <button class="Btn">Ver más</button>
          </a>
        </Card.Body>
      </Card>

      <Card className="projects" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../assets/programando.png")}
          alt="New"
        />
        <Card.Body>
          <Card.Title>Próximamente</Card.Title>
          <Card.Text>Trabajando en nuevos proyectos...</Card.Text>
          <a href="https://github.com/ElyJF">
            <button class="Btn">Ver más</button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}
export default BasicExample;
