import React from "react"
import Content from "../components/body"
import Header from "../components/header"
import { Link } from "gatsby"

const Contacts = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about/">About</Link>
    <Header header="This is contact" />
    <Content body="I am the contact page. Hello!" />
  </div>
)

export default Contacts
