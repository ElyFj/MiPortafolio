import React from "react"; // Importa React correctamente
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card"; // Importa Card de react-bootstrap
import "./AboutMe.css";

class SobreMi extends React.Component {
  // Usa React.Component en lugar de AboutMe
  render() {
    return (
      <div className="me">
        <h1>
          Sobre <Badge bg="secondary">Mí</Badge>
        </h1>
        <BodyShorthandExample /> {/* Llama a la función BodyShorthandExample */}
      </div>
    );
  }
}

function BodyShorthandExample() {
  return (
    <Card className="aboutme" body>
      Continuamente aprendiendo y adquiriendo nuevas habilidades en función a
      las actuales y futuras demandas y tendencias tecnológicas en el campo del
      diseño y desarrollo de aplicaciones web en general. Apasionada con el
      trabajo que realizo, deseo ofrecer y aportar mis conocimientos,
      habilidades y experiencia, así como nuevas ideas, soluciones,
      personalización y seguimiento de calidad al cliente y su objetivo en cada
      proyecto.
    </Card>
  );
}

export default SobreMi;
