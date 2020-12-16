import React from "react";
import { Container } from "reactstrap";

import Header from "../../components/Header";
import AboutCard from "../../components/AboutCard";
import Footer from "../../components/Footer";
import CredCard from "../../components/CredCard";
import SkillsCard from "../../components/SkillsCard";

function About() {
    return (
        <Container>
            <Header />
            <h1  id="title">About</h1>
            <AboutCard />
            <CredCard />
            <SkillsCard />
            <Footer/>
        </Container>
    )
}
export default About;