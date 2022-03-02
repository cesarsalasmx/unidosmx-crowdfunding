import React from "react";

import FooterLogo from "../assets/images/unidos-mx-logo-pruple.png";

const Footer = () => {
  return (
    <div>
      
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__about">
                  <a href="index.html">
                    <img src={FooterLogo} width="129" alt="awesome post" />
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text the <br /> printing and
                    setting industry. Lorm Ipsum
                    <br /> has been the text ever.
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Proyecto Unidos</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#none">Sobre nosotros</a>
                      </li>
                      <li>
                        <a href="#none">Nuestro equipo</a>
                      </li>
                      <li>
                        <a href="#none">Contacto</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Causas Sociales</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#none">Medio ambiente</a>
                      </li>
                      <li>
                        <a href="#none">Grupos vulnerables</a>
                      </li>
                      <li>
                        <a href="#none">Recuperación de espacios</a>
                      </li>
                      <li>
                        <a href="#none">Futuras generaciones</a>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center">
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
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container text-center">
            <p>© UnidosMX. 2022</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
