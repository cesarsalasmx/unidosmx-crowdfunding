import React from "react";
import { Container, Row } from "reactstrap";
import BlockTitle from "./BlockTitle";
import BlogPost from "./BlogPost";

import causeImage1 from "../assets/images/causas/SOY-FUTURO.png";
import causeImage2 from "../assets/images/causas/Sonrie.png";
import causeImage3 from "../assets/images/causas/Reforesta.png";

const BlogHome = () => {
  return (
    <section className="blog-one" id="actividades">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Actividades"
          titleText={`Causas sociales de \nla comunidad`}
        />
        <Row>
          <BlogPost
            postImage={causeImage1}
            postTitle="Soy futuro"
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/causas/soy-futuro"
          />
          <BlogPost
            postImage={causeImage2}
            postTitle="Sonríe"
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/causas/sonrie"
          />
          <BlogPost
            postImage={causeImage3}
            postTitle="Reforesta Cancún"
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/causas/reforesta-cancun"
          />
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
