import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WebCamComp from "./components/WebCam/webCamComp";
import GetStream from "./components/getStream/getStream";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import NodeRTMP from "./components/nodeRTMP/nodeRTMP";
import NormalVideo from "./components/normalVideo/normalVideo";

function App() {
  const videoJsOptionsHLS = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "http://localhost:8000/live/test_stream/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
    fluid: true,
  };

  const videoJsOptionsDASH = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "http://localhost:8000/live/test_stream/index.mpd",
        type: "application/dash+xml",
      },
    ],
    fluid: true,
  };

  return (
    <div className="App">
      <Container fluid className="m-0 p-0 bg-dark">
        {/* <Row className="bg-success">
          <GetStream />
          <GetStream />
        </Row>
        <Row>
          <GetStream />
          <GetStream />
        </Row> */}
        <Row>
          <Col xs={6}>
            <Card>
              <Card.Body>
                <Card.Title>HLS</Card.Title>
                <NodeRTMP {...videoJsOptionsHLS} />
                {/* <NormalVideo /> */}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card>
              <Card.Body>
                <Card.Title>DASH</Card.Title>
                <NodeRTMP {...videoJsOptionsDASH} />
                {/* <NormalVideo /> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
