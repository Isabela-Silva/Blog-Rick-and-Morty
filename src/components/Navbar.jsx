import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">wubalibadublog</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sobre">Sobre</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contato">Contato</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}