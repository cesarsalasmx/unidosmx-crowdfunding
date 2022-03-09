import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logoSm from "../assets/images/unidos-mx-logo-pruple.png";
import loginImg from "../assets/images/resources/login-img.png";
import { Link } from "gatsby";
const Login = () => {
  // handleValidSubmit
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="form-body">
      <div className="website-logo">
        <div className="logo">
            <Link to="/">
            <img src={logoSm} width="200px" alt="Logo Proyecto Unidos MX" />
          </Link>
        </div>
      </div>

      <div className="row">
        <div class="img-holder">
          <div class="bg"></div>
          <div class="info-holder">
            <img src={loginImg} alt="Login IMG" />
          </div>
        </div>
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Iniciar Sesión</h3>
              <div class="page-links">
                <a href="#none" class="active">
                  Iniciar Sesión
                </a>
                <Link to="/registro">Registro</Link>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  block
                  size="lg"
                  type="submit"
                  disabled={!validateForm()}
                >
                  Iniciar Sesión
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
