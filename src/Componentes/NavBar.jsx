import './NavBar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">David Arce</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Principal</a></li>
        <li><a href="/Informacion">Informacion</a></li>
        <li><a href="/Proyectos">Proyectos</a></li>
        <li><a href="/Redes">Redes Sociales</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;