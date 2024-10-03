
import "./Proyectos.css"

const Proyectos = () => {
  return (
    <div className="Proyectos">
      <div className="proyectos-container">
      <div className="titulos1">
        <h1 className="title">Mis Proyectos</h1>
      </div>

      <div className="container">
        <div className="card">
          <a href="https://github.com/davidarce0519/tarea1" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcmwIcGkOMcMFci7mBXsVLUKK-fXqKpT9Sw&s" alt="Tarea Responsive" />
            <h3>Tarea Responsive</h3>
          </a>
        </div>

        <div className="card">
          <a href="https://github.com/davidarce0519/Tarea2" target="_blank" rel="noopener noreferrer">
            <img src="https://www.videojuegosydesarrollo.com/wp-content/uploads/2020/01/login-blue-tones.jpg" alt="Tarea 2" />
            <h3>Tarea Login</h3>
          </a>
        </div>

        <div className="card">
          <a href="https://github.com/davidarce0519/Tarea3" target="_blank" rel="noopener noreferrer">
            <img src="https://www.shutterstock.com/image-vector/businessman-many-arms-doing-various-260nw-2184853193.jpg" alt="Título 4" />
            <h3>Tarea 3</h3>
          </a>
        </div>

        <div className="card">
          <a href="https://github.com/davidarce0519/Tarea_Comparador" target="_blank" rel="noopener noreferrer">
            <img src="https://reseteomatematico.com/wp-content/uploads/policubos-numeros-comparar.jpg" alt="Título 5" />
            <h3>Tarea comparar React</h3>
          </a>
        </div>

        <div className="card">
          <a href="https://github.com/davidarce0519/Video_React" target="_blank" rel="noopener noreferrer">
            <img src="https://uncommunitymanager.es/wp-content/uploads/seo_google_youtube.jpg" alt="Título 5" />
            <h3>Reproductor de video</h3>
          </a>
        </div>
        
      </div>

      <div className="titulos">
        <h1 className="title2">David Alejandro Arce Burbano</h1>
      </div>
    </div>
    </div>
  )
}

export default Proyectos
