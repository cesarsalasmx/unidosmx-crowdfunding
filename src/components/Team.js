import React from "react";
import BlockTitle from "./BlockTitle";

import TeamShape1 from "../assets/images/shapes/team-1-bg-1-1.png";
import TeamShape2 from "../assets/images/shapes/team-1-bg-1-2.png";
import TeamMemeber1 from "../assets/images/team/ana-lasa-proyecto-unidos-mx.jpg";
import TeamMemeber2 from "../assets/images/team/luis-duran-proyecto-unidos-mx.jpg";
import TeamMemeber3 from "../assets/images/team/natalia-vara-alonso-proyecto-unidos-mx.jpg";

const Team = () => {
  return (
    <section className="team-one" id="team">
      <img
        src={TeamShape1}
        className="team-one__bg-shape-1"
        alt="awesome post"
      />
      <img
        src={TeamShape2}
        className="team-one__bg-shape-2"
        alt="awesome post"
      />
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText="Nuestro equipo"
          titleText={`Conoce los miembros \nde nuestro equipo`}
        />
        <div className="row">
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Ana Lasa</h3>
                <p>Vicepresidente Unidos MX</p>
                <div className="team-one__image">
                  <img src={TeamMemeber1} alt="awesome post" className="team-image" />
                </div>
                <div className="team-one__social">
                  <a href="#none">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Luis Durán</h3>
                <p>Presidente Unidos MX</p>
                <div className="team-one__image">
                  <img src={TeamMemeber2} alt="awesome post" className="team-image" />
                </div>
                <div className="team-one__social">
                  <a href="#none">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Natalia Vara Alonso</h3>
                <p>Directora de Comunidad Unidos MX</p>
                <div className="team-one__image">
                  <img src={TeamMemeber3} alt="awesome post" className="team-image" />
                </div>
                <div className="team-one__social">
                  <a href="#none">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
