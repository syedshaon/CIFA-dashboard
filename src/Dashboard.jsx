// src/components/Dashboard.jsx
import React from 'react';
import { useTheme } from './contexts/ThemeContext';  
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import ThemeToggle from './components/ThemeToggle';

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();
  const borderColorClass = theme === 'dark' ? 'border-white' : 'border-light';

  return (
    <Container fluid className="min-vh-100 d-flex">
      {/* Left Sidebar */}
      <Col md="auto" className={`d-flex flex-column align-items-start justify-content-between border-end ${borderColorClass} p-3`}>
       
          <h2>Dashboard</h2>
     
        <ThemeToggle />
      </Col>

      {/* Main Content */}
      <Col className="p-4">
        <h2 >Dashboard</h2>
        
        {/* Cards Row */}
        <Row className="g-3 mt-4">
          {[...Array(6)].map((_, index) => (
            <Col key={index} md={6} lg={4} xl={2}>
              <div className={`d-flex justify-content-center align-items-center h1 border rounded-4 ${borderColorClass}`} style={{ height: "140px" }}>
                {index + 1}
              </div>
            </Col>
          ))}
        </Row>
        
        {/* Body Left Area */}
        <Row className="g-3 mt-4">
          <Col md={9}>
            <Row className="g-3">
              <Col md={8}>
                <div className={`d-flex justify-content-center align-items-center h1 border rounded-4 ${borderColorClass}`} style={{ height: "140px" }}>
                  A
                </div>
              </Col>
              <Col md={4}>
                <div className={`d-flex justify-content-center align-items-center h1 border rounded-4 ${borderColorClass}`} style={{ height: "140px" }}>
                  B
                </div>
              </Col>
            </Row>
            
            {/* Additional Rows */}
            <Row className="g-3">
              {[...Array(2)].map((_, index) => (
                <Col md={6} key={index}>
                  <div className={`d-flex justify-content-center align-items-center h1 border rounded-4 ${borderColorClass}`} style={{ height: "140px" }}>
                    {index === 0 ? 'A' : 'B'}
                  </div>
                </Col>
              ))}
            </Row>
            
            <Row className="g-3 mt-4 justify-content-between">
              {[...Array(5)].map((_, index) => (
                <Col xs={12} sm={12} md={6} lg={3} xl={2} className="d-flex justify-content-center" key={index}>
                  <div className={`d-flex justify-content-center align-items-center h1 border rounded-4 ${borderColorClass}`} style={{ height: "160px", width: "100%" }}>
                    {index + 1}
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Body Right Sidebar */}
          <Col md={3}>
            <div className={`border rounded-4 ${borderColorClass} p-2`}>
              {['Account Balance', 'Video Resume & CV Database', 'Buy More Job Ads', 'Calendar'].map((text, idx) => (
                <Col key={idx} className="mb-3">
                  <div className={`d-flex justify-content-center align-items-center h1 border rounded-4 ${borderColorClass}`} style={{ height: idx === 3 ? '220px' : '160px' }}>
                    {text}
                  </div>
                </Col>
              ))}
            </div>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Dashboard;
