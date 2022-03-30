import React from "react";
import { Container } from "reactstrap";

import Cta3Shape1 from "../assets/images/shapes/cta-three-bg-1-1.png";
import Cta3Shape2 from "../assets/images/shapes/cta-three-bg-1-2.png";

const CTAThree = () => {
  return (
    <section className="cta-three">
      <img src={Cta3Shape1} className="cta-three__bg-1" alt="awesome post" />
      <img src={Cta3Shape2} className="cta-three__bg-2" alt="awesome post" />
      <Container className="text-center">
        <h3>
          Síguenos en nuestras redes sociales<br />y mira lo que estamos haciendo
        </h3>
        
        <div className="cta-three__btn-wrap align-items-center justify-content-md-center justify-content-sm-center">
                <div className="footer-widget">
                  <div className="footer-widget__social">
                    <a href="#none">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="#none">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#none">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#none">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
              </div>
      </Container>
    </section>
  );
};

export default CTAThree;
