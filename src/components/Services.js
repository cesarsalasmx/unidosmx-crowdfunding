import React from "react";
import BlockTitle from "./BlockTitle";
import imgVoluntariado from "../assets/images/causas/Voluntariado-unidos-mx.png";
import imgplayeras from "../assets/images/causas/playeras-unidos-mx.png";
import imgDonante from "../assets/images/causas/donante-unidos-mx.png";
import imgEmpresas from "../assets/images/causas/empresas-cool-unidos-mx.png";

const Services = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText="Donación online"
          titleText={`¿Cómo quieres unirte a transformar\nnuestra comunidad?`}
        />
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <img
                  src={imgVoluntariado}
                  className="proyectoIcon"
                  data-wow-duration="1500ms"
                  alt="awesome post"
                />
                </div>
                <h3>Voluntariado</h3>
                <p>Lorem ipsum is are many variations of pass majy.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                <img
                src={imgEmpresas}
                className="proyectoIcon"
                data-wow-duration="1500ms"
                alt="awesome post"
              />
                </div>
                <h3>Empresa Cool</h3>
                <p>Lorem ipsum is are many variations of pass majy.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                <img
                src={imgplayeras}
                className="proyectoIcon"
                data-wow-duration="1500ms"
                alt="awesome post"
              />
                </div>
                <h3>Playeras Soy Futuro</h3>
                <p>Lorem ipsum is are many variations of pass majy.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                <img
                src={imgDonante}
                className="proyectoIcon"
                data-wow-duration="1500ms"
                alt="awesome post"
              />
                </div>
                <h3>Donante</h3>
                <p>Lorem ipsum is are many variations of pass majy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
