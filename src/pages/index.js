import React from "react";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BlogHome from "../components/BlogHome";
import CTAThree from "../components/CTAThree";
import Contact from "../components/Contact";
import Services from "../components/Services";
import CTAOne from "../components/CTAOne";
import FunFact from "../components/FunFact";
import CTATwo from "../components/CTATwo";
import Team from "../components/Team";
import Pricing from "../components/Pricing";
import VideoOne from "../components/VideoOne";
import FAQ from "../components/FAQ";

const HomePage = () => (
  <div>
    <Layout pageTitle="Apiton | Home Page">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <Banner />
      <Services />
      <CTAOne />
      <FunFact />
      <CTATwo />
      <Pricing />
      <Team />
      <VideoOne />
      <FAQ />
      <BlogHome />
      <Contact />
      <CTAThree />
      <Footer />
    </Layout>
  </div>
);

export default HomePage;
