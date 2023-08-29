import React from "react";
import { Container, Row } from "react-bootstrap";
import pdf from "../resume/lokesh-choudhary-resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { saveAs } from 'file-saver';

function Resume() {

    const handleDownloadPDF = () => {
        console.log("Yes")
        saveAs(pdf, 'lokesh-choudhary-resume.pdf');
        const newWindow = window.open();
        newWindow.location.href = pdf;
    };


    return (
        <div>
            <h1 className="project-heading" id='resume' style={{ color: ' #c110ef', paddingLeft: "39px",paddingBottom:"32px" }}>
                Download <strong className="purple"> Resume </strong>
            </h1>

            <Container fluid className="resume-section">

                <Row style={{ justifyContent: "center", position: "relative", display: "flex" }}>
                    <a href={pdf} target="_blank" rel="noopener noreferrer" download>
                       
                        <button variant="primary"
                            href={pdf}
                            target="_blank"
                            style={{ maxWidth: "250px" }}
                            class='resume-btn'
                            onClick={handleDownloadPDF}>
                           <span style={{display:"flex",alignItems:"center"}}> <AiOutlineDownload />
                                &nbsp;Download CV</span>
                        </button>


                    </a>
                </Row>



            </Container>
        </div>
    );
}

export default Resume;