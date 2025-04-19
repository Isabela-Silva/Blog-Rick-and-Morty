import { Link } from 'react-router-dom';
import './Navbar.css'; // Arquivo CSS personalizado

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark tech-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand tech-brand" to="/">
          <span className="tech-logo">{"</>"}</span> wubalibadublog
        </Link>
        
        {/* Botão para mobile */}
        <button 
          className="navbar-toggler tech-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarTech"
          aria-controls="navbarTech"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Itens do menu */}
        <div className="collapse navbar-collapse" id="navbarTech">
          <ul className="navbar-nav ms-auto tech-nav">
            <li className="nav-item">
              <Link className="nav-link tech-link" to="/">
                <i className="bi bi-house-door tech-icon"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link tech-link" to="/sobre">
                <i className="bi bi-person-gear tech-icon"></i> Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link tech-link" to="/contato">
                <i className="bi bi-envelope-at tech-icon"></i> Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}