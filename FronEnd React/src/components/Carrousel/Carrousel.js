import { Link } from "react-router-dom"
import CarouselImagem from "../../assets/img/bg20.jpg"
import CarouselImagemdois from "../../assets/img/bg21.jpg"
import CarouselImagemtres from "../../assets/img/bg22.jpg"
import './Carrousel.css'

function Carrousel() {
    return(
      <section id="myCarousel" className="carousel slide mt-0 pt-0 d-none d-md-block" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active mt-0 pt-0"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="mt-0 pt-0  w-100" src={CarouselImagem} alt="First slide"/>
          <div className="container">
            <div className=" bloco carousel-caption text-left">
              <h1 className="cor">Pacotes exclusivos</h1>
              <p className="d-none d-sm-none d-md-block d-sm-block cor">Cras justo odio, at eget metus. Nullam id dolor idut id
                elit.</p>
              <p><Link className="btn btn-lg btn-primary" to={"/Cadastro"}
                  role="button">Cadastre-se e
                  confira</Link></p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img className=" mt-0 pt-0 w-100" src={CarouselImagemdois} alt="Second slide"/>
          <div className="container">
            <div className=" bloco carousel-caption">
              <h1 className="cor">O mundo espera por você</h1>
              <p className="d-none d-sm-none d-md-block d-sm-block cor">Cras justo odio, id dolor id nibh ultricies vehicula ut
                id
                elit.</p>
              <p><Link className="btn btn-lg btn-primary" to={"/Destinos"} role="button">Venha
                  conferir
                  </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className=" mt-0 pt-0 w-100" src={CarouselImagemtres} alt="Third slide"/>
          <div className="container">
            <div className="bloco carousel-caption text-right">
              <h1 className="cor">Venha se supreender</h1>
              <p className="d-none d-sm-none d-md-block d-sm-block cor">Teget quam. Donec id elit non mi portatus. Nulehicula ut
                id elit.</p>
              <p><Link className="btn btn-lg btn-primary" to={"/Promocoes"} role="button">Veja as
                  promoções</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </section>
    )
}

export default Carrousel