
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import SideMenu from "./sideMenu"
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
            menuLinks  {
                home {
                    name 
                    links {
                        name
                        link
                    }
                }
                labels {
                    name 
                    links {
                        name
                        link
                    }
                }
                products {
                    name 
                    links {
                        name
                        link
                    }
                }
                customers {
                    name 
                    links {
                        name
                        link
                    }
                }
                manufacturing {
                    name 
                    links {
                        name
                        link
                    }
                }
                adminPortal {
                    name 
                    links {
                        name
                        link
                    }
                }
                employeePortal {
                    name 
                    links {
                        name
                        link
                    }
                }
            }
        }
      }
    }
  `)

  return (
    <>
      {/* <Header /> */}
      <SideMenu menuLinks={data.site.siteMetadata.menuLinks} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout