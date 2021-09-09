import * as React from 'react'
import PropTypes from 'prop-types'
import './sidemenu.css'
import { useStaticQuery, graphql } from 'gatsby'
import { Col, Container, Row } from 'react-bootstrap'

// import Header from "./header"
import SideMenu from './sideMenu'
import HeaderBar from './headerBar'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      {/* <Header /> */}
<HeaderBar />
      <Container>
        <Row>
          <Col xs={2}>
            <SideMenu menuLinks={data.site.siteMetadata.menuLinks} />
          </Col>
          <Col xs={10} id='page-content-wrapper'>
            <main>{children}</main>
          </Col>
        </Row>{' '}
      </Container>
      <div className='fixed-bottom'>
        <Container>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href='https://www.gatsbyjs.com'>Gatsby</a>
          </footer>
        </Container>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
