import React from "react"
import Header from "../components/header"
import Content from "../components/body"
import { Link } from "gatsby"

const About = () => (
  <div>
    <Link to="/">Home</Link>
    <br />
    <Link to="/contacts/">Contact Us</Link>
    <Header header="This is about page." />
    <Content body="Wow. React & Gatsby are awesome.">
      This is about page
    </Content>
  </div>
)

export default About
