import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import BlogSidebar from "../../components/BlogSidebar";
import BlogDetailsImage from "../../assets/images/causas/SOY-FUTURO.png";
import AuthorImage from "../../assets/images/blog/author-1-1.jpg";

const BlogPostPage = () => (
  <Layout pageTitle="UnidosMX - Crowdfunding">
    <Header btnClass="main-nav__btn-two" />
    <MobileMenu />
    <PageHeader pageHeading="Soy Futuro" />

    <section className="blog-details">
      <Container>
        <Row>
          <Col lg={8} xs={12}>
            <div>
                <div className="blog-details__main">
                    <div className="blog-details__image">
                    <img src={BlogDetailsImage} alt="awesome post" />
                    </div>
                    <div className="blog-details__content">
                    <div className="blog-one__meta">
                        <a href="#none">
                        <i className="far fa-clock"></i> 20 Feb
                        </a>
                        <a href="#none">
                        <i className="far fa-comments"></i> 2 comments
                        </a>
                    </div>
                    <h2>Soy Futuro</h2>
                    <p>
                        Intervenimos positivamente escuelas públicas primarias en situación vulnerable a través de la restauración de espacios 
                    </p>
                    </div>
                    <div className="blog-details__meta">
                    </div>
                </div>
                <div className="blog-author">
                    <div className="blog-author__image">
                    <img src={AuthorImage} alt="awesome post" />
                    </div>
                    <div className="blog-author__content">
                    <h3>Christine Eve </h3>
                    <p>
                        Encargado de proyecto "Soy Futuro".
                    </p>
                    </div>
                </div>
                <div className="comment-form">
                    <h3 className="comment-one__block-title">Contactar al encargado de proyecto</h3>
                    <form className="contact-form-validated contact-one__form">
                    <div className="row">
                        <div className="col-lg-6">
                        <input type="text" placeholder="Nombre" name="name" />
                        </div>
                        <div className="col-lg-6">
                        <input type="text" placeholder="Correo Electrónico" name="email" />
                        </div>
                        <div className="col-lg-12">
                        <input type="text" placeholder="Asunto" name="subject" />
                        </div>
                        <div className="col-lg-12">
                        <textarea placeholder="Mensaje" name="message"></textarea>
                        </div>
                        <div className="col-lg-12 text-left">
                        <button type="submit" className="thm-btn contact-one__btn">
                            <span>Enviar mensaje</span>
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
          </Col>
          <Col lg={4}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>

    <Footer />
  </Layout>
);

export default BlogPostPage;
