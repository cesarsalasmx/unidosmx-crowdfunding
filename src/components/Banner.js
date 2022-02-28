import React, { useState } from "react";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/banner-image-1-1.jpg";
import BannerMoc from "../assets/images/unidosmx-home-banner.png";

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false
  });
  const openModal = () => {
    setOpen({
      isOpen: true
    });
  };

  return (
    <section className="banner-one" id="home">
      <img
        src={BannerShape}
        className="banner-one__bg-shape-1"
        alt="awesome post"
      />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}
      ></div>
      <div className="container">
        
        <div className="banner-one__moc">
          <img
            src={BannerMoc}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt="awesome post"
          />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              <div className="mc-form__response"></div>
              <h3>
                Proyecto Unidos <br /> te ayuda con <br /> tu proyecto
              </h3>
              <p>
                Nulla facilisi. Proin felis neque, suscipit egestas erat a{" "}
                <br /> tincidunt finibus magna consectetur lacus.
              </p>
              <a href="#none" className="thm-btn banner-one__btn">
                <span>Comienza ahora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
