import {
  Row,
  Container,
  ButtonGroup,
  Button,
  Col,
  Navbar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const ButtonsListAdmin = ({ onViewChange, crearItem }) => {
  return (
    <Navbar sticky="top">
      <Container
        className="d-flex justify-content-center align-items-center"
        fluid>
        <Row>
          <Col xs={6} md={6} className="mb-2 mb-md-0">
            <ButtonGroup>
              <Button
                variant="outline-secondary"
                className="NavbarButtons btn-lg"
                onClick={() => onViewChange("noticiasAdmin")}>
                Noticias
              </Button>
              <Button
                variant="outline-secondary"
                className="NavbarButtons btn-lg"
                onClick={() => onViewChange("contactosAdmin")}>
                Contactos
              </Button>
            </ButtonGroup>
          </Col>
          <Col xs={6} md={6} className="text-end">
            <Button
              variant="outline"
              className="NavbarButtons btn-lg"
              onClick={() => crearItem()}>
              Crear
              <FontAwesomeIcon icon={faCirclePlus} className="ms-2" />
            </Button>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default ButtonsListAdmin;
