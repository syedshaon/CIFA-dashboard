// src/components/Dashboard.jsx
import React from 'react';
import { useTheme } from './contexts/ThemeContext';  
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import ThemeToggle from './components/ThemeToggle';

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container fluid className="min-vh-100 d-flex">
      {/* Left Sidebar */}
      <Col  md="auto" className="d-flex flex-column align-items-start justify-content-between   border-end border-primary p-3">
        <Navbar bg="light" variant="light" className="w-100 mb-3">
          <Navbar.Brand>Dashboard</Navbar.Brand>
        </Navbar>
        <ThemeToggle />
      </Col>

      {/* Main Content */}
      <Col className="  p-4">
        <h2 className="text-white">Dashboard</h2>
        <Row className="g-3 mt-4">
          {[...Array(6)].map((_, index) => (
            <Col key={index} md={6} lg={4} xl={2}>
              <div className="d-flex justify-content-center align-items-center h1 border rounded-4 bg-white border-dark" style={{ height: "140px" }}>
                {index + 1}
              </div>
            </Col>
          ))}
        </Row>
        <Row className="g-3 mt-4">
      {/* Body Left Area */}
           <Col  md={9} >
              
                <Row className="g-3  ">
                  <Col  md={8} >
                      <div className="d-flex justify-content-center align-items-center h1 border rounded-4 bg-white border-dark" style={{ height: "140px" }}>
                      A
                      </div>
                    </Col>
                  
                    <Col  md={4} >
                      <div className="d-flex justify-content-center align-items-center h1 border rounded-4 bg-white border-dark" style={{ height: "140px" }}>
                        B
                      </div>
                    </Col>
              
                </Row>
                <Row className="g-3  ">
                  <Col  md={6} >
                      <div className="d-flex justify-content-center align-items-center h1 border rounded-4 bg-white border-dark" style={{ height: "140px" }}>
                      A
                      </div>
                    </Col>
                  
                    <Col  md={6} >
                      <div className="d-flex justify-content-center align-items-center h1 border rounded-4 bg-white border-dark" style={{ height: "140px" }}>
                        B
                      </div>
                    </Col>
              
                </Row>
                <Row className="g-3  ">
                  <Col  md={6} >
                      <div className="d-flex justify-content-center align-items-center h1 border rounded-4 bg-white border-dark" style={{ height: "140px" }}>
                      A
                      </div>
                    </Col>
                  
                    <Col  md={6} >
                      <div className="d-flex justify-content-center align-items-center h1 border rounded-4 bg-white border-dark" style={{ height: "140px" }}>
                        B
                      </div>
                    </Col>
              
                </Row>

                <Row className="g-3 mt-4">
                {[...Array(5)].map((_, index) => (
                  <Col key={index} style={{ width: "20%" }}>
                    <div className="d-flex justify-content-center align-items-center h1 border rounded-4 bg-white border-dark" style={{ height: "160px" }}>
                      {index + 1}
                    </div>
                  </Col>
                ))}
              </Row>

             
            </Col>
          {/* Body Right/Sidebar Area */}
            <Col  md={3} >
             
              <div className="  border rounded-4 bg-white border-dark p-2"  >
               
                  <Col  >
                    <div className="d-flex justify-content-center align-items-center h1 border rounded-4 bg-white border-dark" style={{ height: "160px" }}>
                      Account Balance
                    </div>
                  </Col>
                   <Col  >
                    <div className="d-flex justify-content-center align-items-center h1 border rounded-4 bg-white border-dark" style={{ height: "160px" }}>
                      Video Resume & CV Database
                    </div>
                  </Col>
                   <Col  >
                    <div className="d-flex justify-content-center align-items-center h1 border rounded-4 bg-white border-dark" style={{ height: "160px" }}>
                      Buy More Job Ads
                    </div>
                  </Col>
                   <Col  >
                    <div className="d-flex justify-content-center align-items-center h1 border rounded-4 bg-white border-dark" style={{ height: "220px" }}>
                      Calendar
                    </div>
                  </Col>

               
                
              </div>
            </Col>
      
        </Row>
      </Col>
    </Container>
  );
};

export default Dashboard;
