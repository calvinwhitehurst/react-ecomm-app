import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import {
	Col,
	Container,
	Row,
} from 'react-bootstrap';

// import Header from "./header"
import SideMenu from './sideMenu'
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
      <Container fluid>
        <Row className='flex-xl-nowrap'>
          <Col
            as={SideMenu}
            xs={12}
            md={3}
            lg={2}
            menuLinks={data.site.siteMetadata.menuLinks}
          />
          <Col xs={12} md={9} lg={10}>
            <main>{children}</main>
          </Col>
          <footer
            style={{
              marginTop: `2rem`
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href='https://www.gatsbyjs.com'>Gatsby</a>
          </footer>
        </Row>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
