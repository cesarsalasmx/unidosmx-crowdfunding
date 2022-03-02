import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import AccordionItem from "./AccordionItem";
import faqBG from "../assets/images/shapes/faq-bg-1-1.png";

const FAQ = (props) => {
  return (
    <section className="faq-one">
      <img src={faqBG} className="faq-one__bg-shape-1" alt="awesome post" />
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Preguntas frecuentes"
          titleText={`Preguntanos algo sobre Unidos MX`}
        />
        <div className="accrodion-grp faq-accrodion">
          <AccordionItem
            title="¿Qué es Proyecto Unidos MX?"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
          <AccordionItem
            title="¿Qué causas sociales se apoyan?"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={true}
          />
          <AccordionItem
            title="¿Cómo realizo una donación?"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
          <AccordionItem
            title="¿Cómo publico un proyecto?"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
