"use client"
import Link from 'next/link';
import Image from 'next/image';
import serviceImg1 from "../../public/images/services1.jpg"
import serviceImg2 from "../../public/images/services2.jpg"
import serviceImg3 from "../../public/images/services3.jpg"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { motion } from "framer-motion"
const WhyUs = () => {
  return (
    <section className="pt-5">
      <div className="container">
        <div className="sectionHeader mb-5">
          <div className="sectionTitle">
            <h2 className="mb-3">Why Us</h2>
          </div>
        </div>
        <div className="serviceListTabs">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="g-0">
              <Col md={6}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Design Expertise</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Facility Management</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Community</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={6}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <motion.div className="servicesTabContent"
                    initial={{ y: 75, opacity:0}} 
            whileInView={{ y: 0, opacity:1 }} 
            viewport={{ once: false }}
          
            transition={{ duration: 0.6 }}
            >
                      <Image
                        src={serviceImg1}
                        alt="image"
                        width={850}
                        height={270}
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis. Risus commodo viverra maecenas accumsan lacus
                        vel facilisis.
                      </p>
                    </motion.div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <motion.div className="servicesTabContent"
                       initial={{ y: 75, opacity:0}} 
                       whileInView={{ y: 0, opacity:1 }} 
                       viewport={{ once: false }}
                       transition={{ duration: 0.6 }}
                  >
                      <Image
                        src={serviceImg2}
                        alt="image"
                        width={850}
                        height={270}
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis. Risus commodo viverra maecenas accumsan lacus
                        vel facilisis.
                      </p>
                    </motion.div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                  <motion.div className="servicesTabContent"
                   initial={{ y: 75, opacity:0}} 
                   whileInView={{ y: 0, opacity:1 }} 
                   viewport={{ once: false }}
                   transition={{ duration: 0.6 }}
                  >
                      <Image
                        src={serviceImg3}
                        alt="image"
                        width={850}
                        height={270}
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis. Risus commodo viverra maecenas accumsan lacus
                        vel facilisis.
                      </p>
                    </motion.div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
};

export default WhyUs