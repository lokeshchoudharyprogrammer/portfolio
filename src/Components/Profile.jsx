import React from 'react'
import { Container, Box, SimpleGrid } from "@chakra-ui/react";
import { Col } from "react-bootstrap";
const Profile = () => {
    return (
        <>
            <Container maxW="container.lg">

                <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 2 }} spacing={7} justifyContent="space-around" alignItems={'center'}>
                    <Col md={10} className="home-header" >
                        <h1 style={{ paddingBottom: 15, color: "black" }} className="heading" >
                            Hi There!{" "}
                            <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>

                        <h1 className="heading-name" style={{ color: "black" }}>
                            I'M
                            <strong className="main-name"> 𝐿𝑜𝓀𝑒𝓈𝒽 𝒞𝒽𝑜𝓊𝒹𝒽𝒶𝓇𝓎</strong>
                        </h1>
                        <h1 style={{ color: "black", paddingLeft: "30px", paddingTop: '15px', fontWeight: '600' }}>
                            I am a skilled web developer with expertise in HTML, CSS, JavaScript, React, Node.js, <br /> Express.js, MongoDB and
                            TypeScript, capable of building dynamic and feature-rich web applications.
                        </h1>



                    </Col>
                    <Box p={4} className="splash-image pulse-ring" >
                        <img src="https://avatars.githubusercontent.com/u/112642820?v=4" alt="Lokesh Choudhary's Avatar" style={{ borderRadius: "23px" }} />
                    </Box>


                </SimpleGrid>

            </Container>
        </>
    )
}

export default Profile