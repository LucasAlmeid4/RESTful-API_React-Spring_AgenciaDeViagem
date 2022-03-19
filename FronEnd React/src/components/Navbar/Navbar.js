/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from "react-router-dom"
function Navbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <h1 className="titulo">RecodeAirline</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" exact>Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Cadastro" className="nav-link ">Cadastre-se</Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Serviços
                            </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/Promocoes">Promoções</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="/AllDestinos">Destinos</Link></li>
                                    <li>
                                    <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/Contato">Contato</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/Cliente">Área do Cliente</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/destino">Sugestões</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar