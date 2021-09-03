import * as React from "react"
import 'react-bootstrap-drawer/lib/style.css'
import { Button } from 'react-bootstrap'
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <title>Home Page</title>
      <h1>This is some text</h1>
      <Button href="/about">Click Here</Button>
    </Layout>
  )
}

export default IndexPage
