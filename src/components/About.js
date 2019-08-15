"use-strict";

import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
const internals = {};

internals.style = {
  background: "rgba(0,0,0,0.5)"
};

class About extends Component {
  render() {
    return (
      <Container id="about">
        <h1>About / Bio</h1>
        <Row className="show-grid" style={internals.style}>
          <Col xs={12} sm={6}>
            <h3>Where it all started...</h3>
            <h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                natus alias voluptatibus praesentium autem vel minus dolores,
                nam tenetur distinctio, optio cum, pariatur sit dolore totam
                dicta nisi sint! Facilis?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat nisi aspernatur a ipsam ut iusto. Ad odio perspiciatis
                iste deserunt, doloribus fuga nulla. Voluptate sapiente
                distinctio deserunt consectetur odit veniam!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                perferendis nostrum fugiat, eligendi quaerat laudantium porro,
                tenetur odio amet excepturi rerum magni. Officiis, doloremque
                quibusdam autem iusto saepe inventore et!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                optio nemo. Vitae cum eveniet fugit, neque nam perspiciatis enim
                impedit ea aperiam similique magni nihil possimus officia saepe
                error in.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam rerum blanditiis dicta nesciunt, magnam maxime aliquam
                veniam error aliquid inventore minima omnis architecto fugit
                recusandae molestias ea ab nulla saepe?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                minus cumque omnis recusandae alias in, eveniet nihil quaerat
                exercitationem sequi dolorum facere veniam earum dolore
                inventore quisquam non quo harum?
              </p>
            </h5>
          </Col>
          <Col xs={12} sm={6}>
            <h3>Lorem ipsum dolor</h3>
            <h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                minus cumque omnis recusandae alias in, eveniet nihil quaerat
                exercitationem sequi dolorum facere veniam earum dolore
                inventore quisquam non quo harum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                minus cumque omnis recusandae alias in, eveniet nihil quaerat
                exercitationem sequi dolorum facere veniam earum dolore
                inventore quisquam non quo harum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                minus cumque omnis recusandae alias in, eveniet nihil quaerat
                exercitationem sequi dolorum facere veniam earum dolore
                inventore quisquam non quo harum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                minus cumque omnis recusandae alias in, eveniet nihil quaerat
                exercitationem sequi dolorum facere veniam earum dolore
                inventore quisquam non quo harum?
              </p>
            </h5>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
