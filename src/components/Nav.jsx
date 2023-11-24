import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import { TbMedicalCrossFilled } from "react-icons/tb";


function Nav() {
  const [usuarioLogado] = useState(JSON.parse(sessionStorage.getItem("usuarioLogado")));

  const handleLogout = () => {
    sessionStorage.removeItem("usuarioLogado");
    window.location.reload();
  }

  return (
    <div className="navbar">
      <TbMedicalCrossFilled id='icone'/>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      {usuarioLogado && (
        <div className="user-info">
          <p>{`Usuário Logado: ${usuarioLogado.usuario}`}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {!usuarioLogado && <Link to="/login">Login</Link>}
    </div>
  );
}

export default Nav;
