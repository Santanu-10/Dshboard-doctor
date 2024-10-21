import React from 'react';
import Sidebar from '../src/Components/Sidebar';
import TopBar from '../src/Components/TopBar';
import PatientTable from '../src/Components/PatientTable';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <TopBar />
            <PatientTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
