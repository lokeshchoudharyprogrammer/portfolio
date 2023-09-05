import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCard";


function Projects() {
    return (
        <Container fluid className="project-section" id='projects'>

            <Container>
                <h1 className="project-heading" style={{ color: ' #c110ef', paddingLeft: "39px" }}>
                    My<strong className="purple"> Projects </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <div className="projectsdata">
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={'https://camo.githubusercontent.com/b87006215dc9e036dae18178b702551da7b1181affaad80a334ddfa4616bfa58/68747470733a2f2f692e706f7374696d672e63632f4a305930586d66432f53637265656e73686f742d313934302e706e67'}
                                isBlog={false}
                                title="Lenskart"
                                description="Developed a full-stack web application using React.js, Node.js, Express.js, and MongoDB."
                                ghLink="https://github.com/RutuvikP/ClearDekho-Lenskart-Clone"
                                demoLink="https://cleardekho-rutuvikp.vercel.app/"
                            />
                        </Col>

                    </Row>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={'https://themeforest.img.customer.envatousercontent.com/files/330747686/Previews/01_Analytics.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=27a9bfe3e41060a005fb9bf5232149fa'}
                                isBlog={false}
                                title="Solution.com"
                                description="Boost your team’s alignment, efficiency, and productivity by customizing any workflow to fit your needs."
                                ghLink="https://github.com/lokeshchoudharyprogrammer/superficial-point-8316"
                                demoLink="https://unrivaled-tulumba-195798.netlify.app/"
                            />
                        </Col>

                    </Row>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={'https://img.freepik.com/free-vector/business-hand-drawn-e-commerce-landing-page_23-2149600513.jpg'}
                                isBlog={false}
                                title="Zimika E-commerce "
                                description="E-commerce is the buying and selling of goods and services online.."
                                ghLink="https://github.com/lokeshchoudharyprogrammer/ecommerce-app"
                                demoLink="https://unrivaled-tulumba-195798.netlify.app/"
                            />
                        </Col>

                    </Row>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={'https://images04.nicepage.com/feature/461183/website-blog.jpg'}
                                isBlog={false}
                                title="Blog Application"
                                description="A blog app is a application designed to facilitate the creation, publication, and management of blog content."
                                ghLink="https://github.com/lokeshchoudharyprogrammer/ecommerce-app"
                                demoLink="https://unrivaled-tulumba-195798.netlify.app/"
                            />
                        </Col>

                    </Row>
                </div>
            </Container>
        </Container>
    );
}

export default Projects;