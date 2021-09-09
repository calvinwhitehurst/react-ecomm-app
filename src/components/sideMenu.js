import './sidemenu.css'
import React from 'react'
import { Nav } from 'react-bootstrap'

const SideMenu = ({ menuLinks }) => {
  return (
    <Nav className='col-md-1 d-none d-md-block bg-light sidebar'>
      <div className='sidebar-sticky'></div>
      {menuLinks.map(object => (
        <Nav.Item>
          <Nav.Link href={object.link}>{object.name}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  )
}

export default SideMenu
