import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Ticker = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [location, setLocation] = useState('Fetching location...');

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
                },
                () => {
                    setLocation('Location access denied.');
                }
            );
        } else {
            setLocation('Geolocation not supported.');
        }
    }, []);

    const tickerContent = `Current Time: ${dateTime.toLocaleTimeString()} | Date: ${dateTime.toLocaleDateString()} | Location: ${location}`;

    return (
        <div className="ticker-wrapper">
            <div className="ticker-content">
                {tickerContent} &nbsp;&nbsp;&nbsp; {tickerContent} &nbsp;&nbsp;&nbsp; {tickerContent}
            </div>
        </div>

    );


};

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#212529', color: '#ccc', fontFamily: 'sans-serif' }}>
            <Ticker />
            <Container className="py-4">
                <Row className="text-center text-md-start">
                    <Col md={4} className="mb-3">
                        <h5 className="text-white">Moonlight Events</h5>
                        <p className="small">Celebrating cultural diversity through festivals worldwide.</p>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5 className="text-white">Quick Links</h5>
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
                            <Nav.Link as={Link} to="/gallery" className="text-light">Gallery</Nav.Link>
                            <Nav.Link as={Link} to="/faq" className="text-light">FAQ</Nav.Link>
                            <Nav.Link as={Link} to="/sitemap" className="text-light">Sitemap</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5 className="text-white">Contact Us</h5>
                        <p className="mb-1"><Link to="/about-contact" className="text-light">eprojectgroup2@gmail.com</Link></p>
                        <p className="small">3rd floor Aptech, Wuse II, Abuja</p>
                    </Col>
                </Row>
                <hr className="border-secondary" />
                <p className="text-center small">&copy; {new Date().getFullYear()} Moonlight Events. All Rights Reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;
