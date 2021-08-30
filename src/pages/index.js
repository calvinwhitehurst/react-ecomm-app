import * as React from "react"
import 'semantic-ui-css/semantic.min.css'
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <title>Home Page</title>
      <h1>This is some text</h1>
      <button class="ui button">Click Here</button>
      <a href="/about">About Us</a>
    </Layout>
  )
}

export default IndexPage
