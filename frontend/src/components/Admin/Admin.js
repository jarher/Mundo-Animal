import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Admin() {
  return (
    <div>
      <div className="row">
        <div className="col-5">
          <Navbar bg="light" expand="lg">
            <Nav defaultActiveKey="/home" as="ul">
              <Nav.Item as="li">
                <Nav.Link href="/home">Productos</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
              <Form className="d-flex col-12 flex-row">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success"><span class="material-icons">
                search
                </span>
                </Button>
                </Form>
              </Nav.Item>
              <Nav.Item as="li">
              
              </Nav.Item>
            </Nav>
          </Navbar>
        </div>
      </div>
    </div>
  );
}
