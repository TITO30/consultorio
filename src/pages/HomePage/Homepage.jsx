import { Link } from "react-router-dom";
import "./homepage.css";
import banner from "../../assets/img/banner-consultas.jpg";

const HomePage = () => {
  return (
    <div className="banner-description">
      <div className="banner img">
        <img className="img-banner" src={banner} alt="doctor-online" />
      </div>
      <div className="banner-desc">
        <div className="banner-container">
          <p className="txt-banner">
            Conoce nuestra nueva aplicación de citas online, estamos asus
            ordenes siempre innovando y trayendo las mejores oportunidades
            tecnológicas.
          </p>
          <button className="btn-banner">
            <Link className="link" to="/consulta">
              Hacer cita
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
