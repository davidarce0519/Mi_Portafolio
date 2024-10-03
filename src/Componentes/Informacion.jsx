import './Informacion.css'


const Principal = () => {
  return (
    <div>
        <div className="app-container">
      <div className="image-container">
        <img
          src="https://scontent.fclo3-2.fna.fbcdn.net/v/t39.30808-6/296964594_5430501860365997_5637170943881175694_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0-x3ti2Im7tV08RzPWLo4bPleXBDkU_Bs-V5cEORT8H-OboVSC4AZz7StPy4fOcso5FGkWWtmYRnkcH3CAYWf&_nc_ohc=2-s6lNHNz7oQ7kNvgFINd7B&_nc_ht=scontent.fclo3-2.fna&oh=00_AYCJ1Ov7z0jg5QSo4snJi9UwKe4qbglT3QriPRnJKa-7oA&oe=6702B847"
          alt="Imagen centrada"
          className="centered-image"
        />
      </div>
      
      <div className="contenedor-texto">
        <h3 className="nombre">David Alejandro Arce Burbano</h3>
        <h2 className="Profesion">Ingeniero Multimedia</h2>
        <p className="texto">
          Joven de 20 años amante a la música y al diseño, con experiencia
          sobre todo en el mundo de la música. Tiene habilidades en programación
          y en el desarrollo de experiencias de usuario.
        </p>
      </div>

      <div className="habilidades">
        <div className="HabiB">
          <h1 className="habilidadesFuertes">Habilidades Fuertes</h1>
          <p className="HB">
            Ingeniero multimedia con habilidades en manejo de aplicaciones de diseño, con un técnico en esta área. 
            Habilidades para la comprensión de lenguajes de programación, dominio en creación y programación de videojuegos en 3D,
            y en modelado y animación 3D.
          </p>
        </div>

        <div className="HabiF">
          <h1 className="habilidadesBlandas">Habilidades Blandas</h1>
          <p className="HB">
            Ingeniero multimedia con habilidades creativas para el diseño con experiencia en diseño de experiencias de usuario 
            y front-end en desarrollo web. Capacidad de adaptabilidad a los cambios y aprendizaje de nuevas tecnologías, 
            buena gestión del tiempo para la entrega de proyectos, gran empatía y buenas relaciones en equipos de trabajo.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Principal;
