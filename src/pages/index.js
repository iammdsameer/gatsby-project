import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Content from "../components/body"

const Home = () => (
  <div>
    <Link to="/contacts/">Contact Us</Link>
    <br />
    <Link to="/about/">About</Link>
    <Header header="Hello World!" />
    <Content body="This is an index page." />
  </div>
)

export default Home
